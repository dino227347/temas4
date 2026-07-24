//==============================
// CONFIGURACIÓN
//==============================

const DURACION_EXAMEN = 90 * 60; // 90 minutos en segundos

let tiempoRestante = DURACION_EXAMEN;

let temporizador = null;
//==============================
// ESTADO DEL EXAMEN
//==============================

const estado = {

    indice:0,

    respuestas:new Array(preguntas.length).fill(null),

    revisar:new Array(preguntas.length).fill(false),

    tiempo:DURACION_EXAMEN

};

//==============================
// ELEMENTOS
//==============================

const contador=document.getElementById("contador");
const pregunta=document.getElementById("pregunta");
const opciones=document.getElementById("opciones");
const progreso=document.getElementById("progreso");
const lista=document.getElementById("listaPreguntas");
const tiempo=document.getElementById("tiempo");
const respondidasHTML=document.getElementById("respondidas");

const faltantesHTML=document.getElementById("faltantes");
//==============================
// INICIAR
//==============================

window.onload = () => {


    estado.indice = 0;


    estado.respuestas =
    new Array(preguntas.length).fill(null);


    estado.revisar =
    new Array(preguntas.length).fill(false);


    estado.tiempo = DURACION_EXAMEN;



    crearPanel();

    mostrarPregunta();

    iniciarTemporizador();


}
function crearPanel(){

    lista.innerHTML="";

    preguntas.forEach((p,i)=>{

        const b=document.createElement("button");

        b.className="numero";

        b.textContent=i+1;

        b.onclick=()=>{

            estado.indice=i;

            mostrarPregunta();

        };

        lista.appendChild(b);

    });

}function mostrarPregunta(){

    const p=preguntas[estado.indice];

    contador.textContent=`Pregunta ${estado.indice+1} de ${preguntas.length}`;

    pregunta.textContent=p.pregunta;

    opciones.innerHTML="";

    p.opciones.forEach((op,index)=>{

        const div=document.createElement("div");

        div.className="opcion";

        if(estado.respuestas[estado.indice]===index){

            div.classList.add("seleccionada");

        }

        div.innerHTML=`

            <strong>${String.fromCharCode(65+index)}.</strong>

            ${op}

        `;

        div.onclick=()=>{

            responder(index);

        };

        opciones.appendChild(div);

    });

    actualizarPanel();

    actualizarBarra();
        const contenido = document.querySelector('.contenido');
    if (window.innerWidth <= 768) {
        contenido.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

}function responder(indiceRespuesta){

    estado.respuestas[estado.indice]=indiceRespuesta;

    guardarEstado();

    mostrarPregunta();

}function actualizarBarra(){

    let respondidas=0;

    estado.respuestas.forEach(r=>{

        if(r!==null){

            respondidas++;

        }

    });

    const porcentaje=(respondidas/preguntas.length)*100;

    progreso.style.width=porcentaje+"%";

    respondidasHTML.textContent=respondidas;

    faltantesHTML.textContent=preguntas.length-respondidas;

}
function actualizarPanel(){

    const botones=document.querySelectorAll(".numero");

    botones.forEach((b,i)=>{

        b.className="numero";

        if(estado.respuestas[i]!=null){

            b.classList.add("respondida");

        }

        if(preguntasMarcadas.includes(i)){

    b.classList.add("revision");

        }

        if(estado.revisar[i]){

            b.classList.add("revision");

        }

        if(i===estado.indice){

            b.classList.add("actual");

        }

    });
document.getElementById("siguiente").onclick=()=>{

    if(estado.indice<preguntas.length-1){

        estado.indice++;

        guardarEstado();

        mostrarPregunta();

    }

}

document.getElementById("anterior").onclick=()=>{

    if(estado.indice>0){

        estado.indice--;

        guardarEstado();

        mostrarPregunta();

    }

}
}// =============================
// GUARDAR EXAMEN
// =============================

function guardarEstado() {

    const datos = {
        indice: estado.indice,
        respuestas: estado.respuestas,
        revisar: estado.revisar,
        tiempo: estado.tiempo
    };

    localStorage.setItem("simuladorPSA", JSON.stringify(datos));

}

// =============================
// CARGAR EXAMEN
// =============================

function cargarEstado() {

    const datos = localStorage.getItem("simuladorPSA");

    if (!datos) return;

    const examen = JSON.parse(datos);

    estado.indice = examen.indice;
    estado.respuestas = examen.respuestas;
    estado.revisar = examen.revisar;
    estado.tiempo = examen.tiempo;

}
// =============================
// TEMPORIZADOR
// =============================
function iniciarTemporizador(){


    if(temporizador !== null){

        clearInterval(temporizador);

    }


    actualizarTiempo();


    temporizador = setInterval(()=>{


        tiempoRestante--;


        actualizarTiempo();


        if(tiempoRestante <= 0){


            clearInterval(temporizador);

            finalizarExamen();


        }


    },1000);


}
function finalizarExamen(){


    localStorage.setItem(
        "respuestasExamen",
        JSON.stringify(estado.respuestas)
    );


    window.location.href="resultado.html";


}
function actualizarTiempo(){


    let minutos = Math.floor(tiempoRestante / 60);


    let segundos = tiempoRestante % 60;


    document.getElementById("tiempo").textContent =

    String(minutos).padStart(2,"0")
    +
    ":"
    +
    String(segundos).padStart(2,"0");


}
window.onbeforeunload = function(){

    return "El examen aún no ha terminado.";

}
let preguntasMarcadas = [];
document.getElementById("marcar").onclick = ()=>{

    const indice = estado.indice;


    if(preguntasMarcadas.includes(indice)){

        preguntasMarcadas =
        preguntasMarcadas.filter(p=>p!==indice);

    }else{

        preguntasMarcadas.push(indice);

    }


    actualizarPanel();

};
document.getElementById("finalizar").onclick = ()=>{


    let confirmar = confirm(
        "¿Seguro que deseas finalizar el examen?"
    );


    if(confirmar){

        localStorage.setItem(
            "respuestasExamen",
            JSON.stringify(estado.respuestas)
        );


        window.location.href="resultado.html";

    }

};