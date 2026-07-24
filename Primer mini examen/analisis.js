// ===================================
// ANÁLISIS DETALLADO DEL EXAMEN
// ===================================

// Recuperar respuestas
const respuestasUsuario = JSON.parse(localStorage.getItem("respuestasExamen"));

if (!respuestasUsuario || respuestasUsuario.length === 0) {
    alert("No se encontraron resultados. Realiza el examen primero.");
    window.location.href = "examenGUjaja.html";
}

// ===================================
// CONFIGURACIÓN DE ÁREAS
// ===================================

// Mapeo de IDs de preguntas por área (según el JSON anterior)
const areas = {
    "Química": { 
        ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
        correctas: 0, 
        total: 0 
    },
    "Lenguaje": { 
        ids: [11, 12, 13, 14, 15, 16, 17, 18, 19], 
        correctas: 0, 
        total: 0 
    },
    "Física": { 
        ids: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], 
        correctas: 0, 
        total: 0 
    },
    "Matemáticas": { 
        ids: [33, 34, 35, 36, 37, 38, 39, 40, 41, 42], 
        correctas: 0, 
        total: 0 
    },
    "Biología": { 
        ids: [43, 44, 45, 46, 47, 48, 49, 50, 51, 52], 
        correctas: 0, 
        total: 0 
    },
    "Anatomía": { 
        ids: [53, 54, 55, 56, 57, 58, 59, 60], 
        correctas: 0, 
        total: 0 
    }
};
const colores = {
    "Química": "#8b5cf6",
    "Anatomía": "#ec4899",
    "Biología": "#22c55e",
    "Matemática": "#f59e0b",
    "Lenguaje": "#3b82f6",
    "Física": "#ef4444"
};

// ===================================
// CALCULAR RESULTADOS
// ===================================

let correctas = 0;
let incorrectas = 0;
let sinResponder = 0;
let total = preguntas.length;

// Almacenar datos de cada pregunta para mostrar
let preguntasData = [];

preguntas.forEach((pregunta, indice) => {
    const respuestaUsuario = respuestasUsuario[indice];
    const esCorrecta = respuestaUsuario === pregunta.correcta;
    const area = getArea(pregunta.id);

    // Contar estadísticas
    if (respuestaUsuario === null || respuestaUsuario === undefined) {
        sinResponder++;
        preguntasData.push({
            ...pregunta,
            indice: indice,
            respuestaUsuario: null,
            esCorrecta: false,
            area: area,
            estado: 'sinresponder'
        });
    } else if (esCorrecta) {
        correctas++;
        areas[area].correctas++;
        preguntasData.push({
            ...pregunta,
            indice: indice,
            respuestaUsuario: respuestaUsuario,
            esCorrecta: true,
            area: area,
            estado: 'acertada'
        });
    } else {
        incorrectas++;
        preguntasData.push({
            ...pregunta,
            indice: indice,
            respuestaUsuario: respuestaUsuario,
            esCorrecta: false,
            area: area,
            estado: 'fallada'
        });
    }
    areas[area].total++;
});

// Porcentaje
const porcentaje = ((correctas / total) * 100).toFixed(1);

// ===================================
// MOSTRAR RESUMEN
// ===================================

document.getElementById("resumenPuntaje").textContent = `${correctas}/${total}`;
document.getElementById("resumenPorcentaje").textContent = `${porcentaje}%`;

// ===================================
// MOSTRAR ÁREAS
// ===================================

const areasContainer = document.getElementById("areasContainer");

Object.keys(areas).forEach(area => {
    const datos = areas[area];
    const porcentajeArea = datos.total > 0 ? (datos.correctas / datos.total) * 100 : 0;
    const color = colores[area] || "#94a3b8";
    let estado = "";

    if (porcentajeArea >= 70) estado = "✅";
    else if (porcentajeArea >= 50) estado = "⚠️";
    else estado = "❌";

    const div = document.createElement("div");
    div.className = "area-item";
    div.innerHTML = `
        <span class="area-nombre">${area}</span>
        <div class="area-barra-container">
            <div class="area-barra">
                <div class="area-barra-interna" 
                     style="width: ${porcentajeArea}%; background: ${color};">
                </div>
            </div>
        </div>
        <span class="area-puntaje">${datos.correctas}/${datos.total}</span>
        <span class="area-estado">${estado}</span>
    `;
    areasContainer.appendChild(div);
});

// ===================================
// MOSTRAR PREGUNTAS
// ===================================

let filtroActual = 'todas';

function mostrarPreguntas(filtro) {
    const container = document.getElementById("preguntasContainer");
    const titulo = document.getElementById("tituloLista");

    // Filtrar
    let filtradas = [];
    if (filtro === 'todas') {
        filtradas = preguntasData;
        titulo.textContent = `📝 Todas las preguntas (${filtradas.length})`;
    } else if (filtro === 'falladas') {
        filtradas = preguntasData.filter(p => p.estado === 'fallada');
        titulo.textContent = `❌ Preguntas falladas (${filtradas.length})`;
    } else if (filtro === 'acertadas') {
        filtradas = preguntasData.filter(p => p.estado === 'acertada');
        titulo.textContent = `✅ Preguntas acertadas (${filtradas.length})`;
    } else if (filtro === 'sinresponder') {
        filtradas = preguntasData.filter(p => p.estado === 'sinresponder');
        titulo.textContent = `⏳ Preguntas sin responder (${filtradas.length})`;
    }

    // Mostrar mensaje si no hay preguntas
    if (filtradas.length === 0) {
        container.innerHTML = `
            <div class="pregunta-item" style="text-align:center; color:#64748b; border-left-color:transparent;">
                No hay preguntas en esta categoría 🎉
            </div>
        `;
        return;
    }

    // Mostrar preguntas
    container.innerHTML = '';
    filtradas.forEach(p => {
        const div = document.createElement("div");
        div.className = `pregunta-item ${p.estado}`;

        const letras = ['A', 'B', 'C', 'D'];
        let respuestaHTML = '';

        if (p.estado === 'sinresponder') {
            respuestaHTML = `<span class="sin-respuesta">⏳ No respondiste</span>`;
        } else {
            const tuLetra = letras[p.respuestaUsuario] || '?';
            const correctaLetra = letras[p.correcta] || '?';
            respuestaHTML = `
                <span class="tu-respuesta">Tu: ${tuLetra}</span>
                <span class="respuesta-correcta">Correcta: ${correctaLetra}</span>
            `;
        }

        div.innerHTML = `
            <div class="pregunta-header">
                <span class="pregunta-numero">#${p.id}</span>
                <span class="pregunta-area">${p.area}</span>
                <span>${p.estado === 'acertada' ? '✅' : p.estado === 'fallada' ? '❌' : '⏳'}</span>
            </div>
            <div class="pregunta-texto">${p.pregunta}</div>
            <div class="pregunta-respuestas">${respuestaHTML}</div>
        `;
        container.appendChild(div);
    });
}

// ===================================
// FILTROS
// ===================================

function filtrarPreguntas(filtro) {
    filtroActual = filtro;

    // Actualizar botones activos
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filtro === filtro) {
            btn.classList.add('active');
        }
    });

    mostrarPreguntas(filtro);
}

// ===================================
// FUNCIONES AUXILIARES
// ===================================

function getArea(id) {
    for (const [area, datos] of Object.entries(areas)) {
        if (datos.ids.includes(id)) {
            return area;
        }
    }
    return "Otras";
}

// ===================================
// FUNCIONES DE NAVEGACIÓN
// ===================================

function volverResultado() {
    window.location.href = "resultado.html";
}

function volverInicio() {
    localStorage.removeItem("respuestasExamen");
    localStorage.removeItem("simuladorPSA");
    window.location.href = "examenGUjaja.html";
}

// ===================================
// INICIAR
// ===================================

mostrarPreguntas('todas');