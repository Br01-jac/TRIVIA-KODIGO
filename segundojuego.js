let respuestaCorrecta;
let contenedor = document.getElementById("contenedor");
let Avanzar = 0;
var respuestasCorrectas = 0
let respuestasIncorrectas = 0;
let botonAvanzar = document.getElementById("avanzarpregunta");
let regresar = document.getElementById("regresar-menu");

const cuestionario = [
    {
        pregunta: "Año en que se estreno Depredator 1?",
        respuesta: ["1987", "2001", "1997", "1984"]
    },
    {
        pregunta: "Actor principal de Depredator 1?",
        respuesta: ["Arnold schwarzenegger", "sylvester stallone", "Van dam", "jason statham"]
    },

    {
        pregunta: "Que mision cumplian los soldados en la pelicula?",
        respuesta: ["Rescatar prisioneros", "Eliminar a la guerrilla", "Cruzar la fontera", "ir de paseo y relajarse"]
    },
    {
        pregunta: "Cual fue el motivo que complico la mision de los soldados?",
        respuesta: ["Encontrar al Depredator", "La cantidad de guerrilleros a enfrentarse", "El mal estado de el terreno en la jungla", "No llevaron bloqueador solar"]
    },
    {
        pregunta: "Cauantos sobrevivientes quedan al final de la pelicula?",
        respuesta: ["solamente 2", "ninguno", "todos los que hacian  la mision", "solamente 4"]
    },
    {
        pregunta: "FIN DEL JUEGO!!!",
        respuesta: []
    },

];

const PreguntasHTML = (i) => {

    Avanzar++;
    if (Avanzar > 5) {
        regresar.style.display = "flex";


    }
    const q = cuestionario[i];
    let a = q.respuesta;
    respuestaCorrecta = a[0]
    a = a.sort((a, b) => Math.floor(Math.random() * 3) - 1);
    const respuestaHTMLArray = a.map(PreguntaActual => `<h3 class="respuestaD"><button onClick="evaluarRespuesta('${PreguntaActual}',this)">${PreguntaActual}</button></h3>`)
    const respuestaHTML = respuestaHTMLArray.join(' ')
    let HtmlPreguntacodigo = `<h2>${q.pregunta}</h2><div>${respuestaHTML}</div>`;
    document.querySelector(".contenedor-preguntas").innerHTML = HtmlPreguntacodigo;
}

const evaluarRespuesta = (respuesta, objeto) => {
    document.querySelectorAll('.respuestaD').forEach(a => a.classList.remove('si', 'no'))
    const opcionSeleccionada = objeto.parentNode;
    if (respuesta == respuestaCorrecta) {
        opcionSeleccionada.classList.add('si');
        respuestasCorrectas++;
        PreguntasHTML(Avanzar);
        document.querySelector(".correcto").innerHTML = respuestasCorrectas;
    } else {
        opcionSeleccionada.classList.add('no');
        respuestasIncorrectas++;
        PreguntasHTML(Avanzar);
        document.querySelector(".incorrecto").innerHTML = respuestasIncorrectas
    }

}

PreguntasHTML(Avanzar);

