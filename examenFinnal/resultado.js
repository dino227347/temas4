// ===================================
// RESULTADOS DEL EXAMEN
// ===================================

console.log('📄 resultado.js cargado. Definiendo funciones...');

function iniciarResultado() {
    console.log('🚀 iniciarResultado() ejecutándose...');
    try {
        // Verificar preguntas
        if (typeof preguntas === 'undefined' || !preguntas.length) {
            alert('Las preguntas no se cargaron correctamente. Recarga la página.');
            return;
        }

        // Título del examen
        const examenSorteado = JSON.parse(localStorage.getItem("examenSorteado"));
        if (examenSorteado) {
            const titulo = document.querySelector("h1");
            if (titulo) {
                titulo.textContent = `${examenSorteado.emoji} ${examenSorteado.nombre}`;
            }
        }

        // Recuperar respuestas
        const respuestasUsuario = JSON.parse(localStorage.getItem("respuestasExamen"));
        if (!respuestasUsuario || respuestasUsuario.length === 0) {
            alert("No se encontraron resultados. Por favor, realiza el examen primero.");
            window.location.href = "examenGUjaja.html";
            return;
        }

        // Calcular estadísticas
        let correctas = 0, incorrectas = 0, sinResponder = 0;
        preguntas.forEach((pregunta, indice) => {
            const respuesta = respuestasUsuario[indice];
            if (respuesta === null || respuesta === undefined) {
                sinResponder++;
            } else if (respuesta === pregunta.correcta) {
                correctas++;
            } else {
                incorrectas++;
            }
        });

        const total = preguntas.length;
        const porcentaje = ((correctas / total) * 100).toFixed(1);

        // Mostrar en el DOM
        document.getElementById("puntaje").textContent = `${correctas} / ${total}`;
        document.getElementById("porcentaje").textContent = `${porcentaje}%`;
        document.getElementById("correctas").textContent = correctas;
        document.getElementById("incorrectas").textContent = incorrectas;
        document.getElementById("sinResponder").textContent = sinResponder;

        // Mensaje de estado
        const mensajeDiv = document.getElementById("mensajeEstado");
        const nota = parseFloat(porcentaje);
        if (nota >= 70) {
            mensajeDiv.textContent = "✅ muy bien quien dijo que no se podia.";
            mensajeDiv.className = "mensaje-estado mensaje-aprobado";
        } else if (nota >= 50) {
            mensajeDiv.textContent = "📚 por poquito pero aun falta animooo.";
            mensajeDiv.className = "mensaje-estado mensaje-reprobado";
        } else {
            mensajeDiv.textContent = "💪 No te desanimes que lo vas a intentar 100millones de veses mas alv.";
            mensajeDiv.className = "mensaje-estado mensaje-reprobado";
        }

        // Exponer funciones globales para los botones
        window.verAnalisis = verAnalisis;
        window.volverInicio = volverInicio;

        console.log('✅ Resultado mostrado correctamente');
    } catch (error) {
        console.error('❌ Error en iniciarResultado:', error);
        alert('Ocurrió un error al mostrar los resultados: ' + error.message);
    }
}

// ===================================
// FUNCIONES DE NAVEGACIÓN
// ===================================

function verAnalisis() {
    localStorage.setItem("verAnalisis", "true");
    window.location.href = "analisis.html";
}

function volverInicio() {
    localStorage.removeItem("respuestasExamen");
    localStorage.removeItem("simuladorPSA");
    window.location.href = "examenGUjaja.html";
}

console.log('✅ resultado.js: todas las funciones definidas');