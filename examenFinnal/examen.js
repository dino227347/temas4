// ==============================
// CONFIGURACIÓN
// ==============================
const DURACION_EXAMEN = 90 * 60; // 90 minutos
let tiempoRestante = DURACION_EXAMEN;
let temporizador = null;

// ==============================
// ESTADO DEL EXAMEN
// ==============================
const estado = {
    indice: 0,
    respuestas: [],
    revisar: [],
    tiempo: DURACION_EXAMEN
};

// ==============================
// ELEMENTOS DOM
// ==============================
const contador = document.getElementById("contador");
const pregunta = document.getElementById("pregunta");
const opciones = document.getElementById("opciones");
const progreso = document.getElementById("progreso");
const lista = document.getElementById("listaPreguntas");
const tiempo = document.getElementById("tiempo");
const respondidasHTML = document.getElementById("respondidas");
const faltantesHTML = document.getElementById("faltantes");
let preguntasMarcadas = [];

// ==============================
// FUNCIÓN PRINCIPAL DE INICIO
// ==============================
function iniciarExamen() {
    // Verificar que las preguntas estén cargadas
    if (typeof preguntas === 'undefined' || !preguntas.length) {
        alert('Las preguntas no se cargaron correctamente. Recarga la página.');
        return;
    }

    estado.indice = 0;
    estado.respuestas = new Array(preguntas.length).fill(null);
    estado.revisar = new Array(preguntas.length).fill(false);
    estado.tiempo = DURACION_EXAMEN;
    tiempoRestante = DURACION_EXAMEN;
    preguntasMarcadas = [];

    crearPanel();
    mostrarPregunta();
    iniciarTemporizador();

    // Eventos de botones
    document.getElementById("siguiente").onclick = function() {
        if (estado.indice < preguntas.length - 1) {
            estado.indice++;
            guardarEstado();
            mostrarPregunta();
        }
    };
    document.getElementById("anterior").onclick = function() {
        if (estado.indice > 0) {
            estado.indice--;
            guardarEstado();
            mostrarPregunta();
        }
    };
    document.getElementById("marcar").onclick = function() {
        const idx = estado.indice;
        const pos = preguntasMarcadas.indexOf(idx);
        if (pos > -1) {
            preguntasMarcadas.splice(pos, 1);
        } else {
            preguntasMarcadas.push(idx);
        }
        actualizarPanel();
    };
    document.getElementById("finalizar").onclick = function() {
        if (confirm("¿Seguro que deseas finalizar el examen?")) {
            localStorage.setItem("respuestasExamen", JSON.stringify(estado.respuestas));
            window.location.href = "resultado.html";
        }
    };
}

// ==============================
// FUNCIONES AUXILIARES (sin cambios)
// ==============================
function crearPanel() {
    lista.innerHTML = "";
    preguntas.forEach((p, i) => {
        const b = document.createElement("button");
        b.className = "numero";
        b.textContent = i + 1;
        b.onclick = function() {
            estado.indice = i;
            guardarEstado();
            mostrarPregunta();
        };
        lista.appendChild(b);
    });
}

function mostrarPregunta() {
    const p = preguntas[estado.indice];
    contador.textContent = `Pregunta ${estado.indice+1} de ${preguntas.length}`;
    pregunta.textContent = p.pregunta;
    opciones.innerHTML = "";
    p.opciones.forEach((op, idx) => {
        const div = document.createElement("div");
        div.className = "opcion";
        if (estado.respuestas[estado.indice] === idx) {
            div.classList.add("seleccionada");
        }
        div.innerHTML = `<strong>${String.fromCharCode(65+idx)}.</strong> ${op}`;
        div.onclick = function() {
            responder(idx);
        };
        opciones.appendChild(div);
    });
    actualizarPanel();
    actualizarBarra();
    guardarEstado();
}

function responder(indiceRespuesta) {
    estado.respuestas[estado.indice] = indiceRespuesta;
    mostrarPregunta();
}

function actualizarBarra() {
    let respondidas = estado.respuestas.filter(r => r !== null).length;
    const porcentaje = (respondidas / preguntas.length) * 100;
    progreso.style.width = porcentaje + "%";
    respondidasHTML.textContent = respondidas;
    faltantesHTML.textContent = preguntas.length - respondidas;
}

function actualizarPanel() {
    const botones = document.querySelectorAll(".numero");
    botones.forEach((b, i) => {
        b.className = "numero";
        if (estado.respuestas[i] !== null) b.classList.add("respondida");
        if (preguntasMarcadas.includes(i)) b.classList.add("revision");
        if (i === estado.indice) b.classList.add("actual");
    });
}

function guardarEstado() {
    const datos = {
        indice: estado.indice,
        respuestas: estado.respuestas,
        revisar: estado.revisar,
        tiempo: estado.tiempo
    };
    localStorage.setItem("simuladorPSA", JSON.stringify(datos));
}

function cargarEstado() {
    const datos = localStorage.getItem("simuladorPSA");
    if (!datos) return;
    const examen = JSON.parse(datos);
    estado.indice = examen.indice;
    estado.respuestas = examen.respuestas;
    estado.revisar = examen.revisar;
    estado.tiempo = examen.tiempo;
    tiempoRestante = examen.tiempo;
}

function iniciarTemporizador() {
    if (temporizador) clearInterval(temporizador);
    actualizarTiempo();
    temporizador = setInterval(() => {
        tiempoRestante--;
        actualizarTiempo();
        if (tiempoRestante <= 0) {
            clearInterval(temporizador);
            finalizarExamen();
        }
    }, 1000);
}

function actualizarTiempo() {
    let min = Math.floor(tiempoRestante / 60);
    let seg = tiempoRestante % 60;
    document.getElementById("tiempo").textContent =
        String(min).padStart(2, "0") + ":" + String(seg).padStart(2, "0");
}

function finalizarExamen() {
    localStorage.setItem("respuestasExamen", JSON.stringify(estado.respuestas));
    window.location.href = "resultado.html";
}

// ==============================
// ANTES DE CARGAR, RESTAURAR ESTADO (opcional)
// ==============================
cargarEstado();