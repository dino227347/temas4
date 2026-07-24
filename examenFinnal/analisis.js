// ===================================
// ANÁLISIS DETALLADO DEL EXAMEN
// ===================================

console.log('📄 analisis.js cargado. Definiendo funciones...');

// Variables globales
let preguntasData = [];
let filtroActual = 'todas';
let areas = {};
const colores = {
    "Química": "#8b5cf6",
    "Anatomía": "#ec4899",
    "Biología": "#22c55e",
    "Matemática": "#f59e0b",
    "Lenguaje": "#3b82f6",
    "Física": "#ef4444"
};

// ===================================
// FUNCIÓN PRINCIPAL
// ===================================
function iniciarAnalisis() {
    console.log('🚀 iniciarAnalisis() ejecutándose...');
    try {
        // Verificar que las preguntas estén cargadas
        if (typeof preguntas === 'undefined' || !preguntas.length) {
            console.error('❌ preguntas no está definida o vacía');
            alert('Las preguntas no se cargaron correctamente. Recarga la página.');
            return;
        }
        console.log(`✅ ${preguntas.length} preguntas cargadas`);

        // Recuperar respuestas
        const respuestasUsuario = JSON.parse(localStorage.getItem("respuestasExamen"));
        console.log('📦 Respuestas del usuario:', respuestasUsuario);

        if (!respuestasUsuario || respuestasUsuario.length === 0) {
            alert("No se encontraron resultados. Realiza el examen primero.");
            window.location.href = "examenGUjaja.html";
            return;
        }

        // ===================================
        // CONFIGURACIÓN DE ÁREAS
        // ===================================
        function obtenerAreaPorId(id) {
            if (id >= 1 && id <= 10) return "Química";
            if (id >= 11 && id <= 19) return "Lenguaje";
            if (id >= 20 && id <= 32) return "Física";
            if (id >= 33 && id <= 42) return "Matemáticas";
            if (id >= 43 && id <= 52) return "Biología";
            if (id >= 53 && id <= 60) return "Anatomía";
            return "Otras";
        }

        function detectarAreas(pregs) {
            const areasTemp = {};
            pregs.forEach(p => {
                const area = obtenerAreaPorId(p.id);
                if (!areasTemp[area]) {
                    areasTemp[area] = { ids: [], correctas: 0, total: 0 };
                }
                areasTemp[area].ids.push(p.id);
                areasTemp[area].total++;
            });
            return areasTemp;
        }

        areas = detectarAreas(preguntas);
        console.log('📚 Áreas detectadas:', Object.keys(areas));

        // ===================================
        // CALCULAR RESULTADOS
        // ===================================
        let correctas = 0;
        let incorrectas = 0;
        let sinResponder = 0;
        let total = preguntas.length;

        preguntasData = [];

        preguntas.forEach((pregunta, indice) => {
            const respuestaUsuario = respuestasUsuario[indice];
            const esCorrecta = respuestaUsuario === pregunta.correcta;
            const area = obtenerAreaPorId(pregunta.id);

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
        });

        const porcentaje = ((correctas / total) * 100).toFixed(1);
        console.log(`📊 Resumen: Correctas=${correctas}, Incorrectas=${incorrectas}, SinResponder=${sinResponder}`);

        // ===================================
        // MOSTRAR RESUMEN
        // ===================================
        document.getElementById("resumenPuntaje").textContent = `${correctas}/${total}`;
        document.getElementById("resumenPorcentaje").textContent = `${porcentaje}%`;

        // ===================================
        // MOSTRAR ÁREAS
        // ===================================
        const areasContainer = document.getElementById("areasContainer");
        areasContainer.innerHTML = '';

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
        // MOSTRAR PREGUNTAS (inicial)
        // ===================================
        mostrarPreguntas('todas');

        // Exponer funciones globales para los onclick
        window.filtrarPreguntas = filtrarPreguntas;
        window.volverResultado = volverResultado;
        window.volverInicio = volverInicio;

        console.log('✅ Análisis completado correctamente');
    } catch (error) {
        console.error('❌ Error en iniciarAnalisis:', error);
        alert('Ocurrió un error al generar el análisis: ' + error.message);
    }
}

// ===================================
// FUNCIONES DE FILTRADO Y RENDER
// ===================================
function mostrarPreguntas(filtro) {
    const container = document.getElementById("preguntasContainer");
    const titulo = document.getElementById("tituloLista");

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

    if (filtradas.length === 0) {
        container.innerHTML = `
            <div class="pregunta-item" style="text-align:center; color:#64748b; border-left-color:transparent;">
                No hay preguntas en esta categoría 🎉
            </div>
        `;
        return;
    }

    container.innerHTML = '';
    const letras = ['A', 'B', 'C', 'D'];
    filtradas.forEach(p => {
        const div = document.createElement("div");
        div.className = `pregunta-item ${p.estado}`;

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

function filtrarPreguntas(filtro) {
    filtroActual = filtro;
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filtro === filtro) {
            btn.classList.add('active');
        }
    });
    mostrarPreguntas(filtro);
}

function volverResultado() {
    window.location.href = "resultado.html";
}

function volverInicio() {
    localStorage.removeItem("respuestasExamen");
    localStorage.removeItem("simuladorPSA");
    window.location.href = "examenGUjaja.html";
}

console.log('✅ analisis.js: todas las funciones definidas');