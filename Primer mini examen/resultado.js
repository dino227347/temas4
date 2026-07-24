// ===================================
// RESULTADOS DEL EXAMEN
// ===================================

// Recuperar datos
const respuestasUsuario = JSON.parse(
    localStorage.getItem("respuestasExamen")
);

// Si no existen respuestas
if (!respuestasUsuario || respuestasUsuario.length === 0) {
    alert("No se encontraron resultados. Por favor, realiza el examen primero.");
    window.location.href = "examenGUjaja.html";
}

// Variables
let correctas = 0;
let incorrectas = 0;
let sinResponder = 0;

// Recorrer las preguntas
preguntas.forEach((pregunta, indice) => {
    let respuesta = respuestasUsuario[indice];

    if (respuesta === null || respuesta === undefined) {
        sinResponder++;
    } else if (respuesta === pregunta.correcta) {
        correctas++;
    } else {
        incorrectas++;
    }
});

// Total y porcentaje
let total = preguntas.length;
let porcentaje = ((correctas / total) * 100).toFixed(1);

// Mostrar resultados
document.getElementById("puntaje").textContent = `${correctas} / ${total}`;
document.getElementById("porcentaje").textContent = `${porcentaje}%`;
document.getElementById("correctas").textContent = correctas;
document.getElementById("incorrectas").textContent = incorrectas;
document.getElementById("sinResponder").textContent = sinResponder;

// ===================================
// MENSAJE DE ESTADO
// ===================================

const mensajeDiv = document.getElementById("mensajeEstado");
const nota = parseFloat(porcentaje);

if (nota >= 70) {
    mensajeDiv.textContent = "✅ muy bien quien dijo que no se podia .";
    mensajeDiv.className = "mensaje-estado mensaje-aprobado";
} else if (nota >= 50) {
    mensajeDiv.textContent = "📚 por poquito pero aun falta animooo.";
    mensajeDiv.className = "mensaje-estado mensaje-reprobado";
} else {
    mensajeDiv.textContent = "💪 No te desanimes que lo vas a intentar 100millones de veses mas alv .";
    mensajeDiv.className = "mensaje-estado mensaje-reprobado";
}

// ===================================
// FUNCIONES
// ===================================

function verAnalisis() {
    // Guardar que venimos desde resultados
    localStorage.setItem("verAnalisis", "true");
    window.location.href = "analisis.html";
}

function volverInicio() {
    localStorage.removeItem("respuestasExamen");
    localStorage.removeItem("simuladorPSA");
    window.location.href = "examenGUjaja.html";
}