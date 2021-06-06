let respuestaCorrecta;
let contenedor = document.getElementById("contenedor");
let Avanzar = 0;
var respuestasCorrectas = 0
let respuestasIncorrectas = 0;
let regresar = document.getElementById("regresar-menu");
//CUESTIONARIO QUE CONTIENE LAS PREGUNTAS
const cuestionario = [
    {
        pregunta: "¿Cual es la capital de brasil?",
        respuesta: ["Brasilia", "Tokio", "Rio de Janeiro", "Santa Catarina"]
    },
    {
        pregunta: "¿Numero de familias que formaban la oligarquia cafetalera en el salvador?",
        respuesta: ["14", "13", "9", "12"]
    },

    {
        pregunta: "¿En que años se dio la segunda guerra mundial?",
        respuesta: ["1939-1945", "1939-1944", "1914-1919", "1955-1961"]
    },
    {
        pregunta: "Pais que entregaba 1 millon de dolares diario a la FAES en la guerra civil",
        respuesta: ["Estados Unidos", "Mexico", "Rusia", "China"]
    },
    {
        pregunta: "Fechas en que sucedieron los bombardeos en Hiroshima y Nagasaki",
        respuesta: ["6 y 9 de agosto de 1945", "6 y 9 de agosto de 1944", "6 y 9 de octubre de 1945", "6 y 9 de agosto de 1946"]
    },
    {
        pregunta: "FIN DEL JUEGO!!!",
        respuesta: []
    },

];
//FUNCION PARA AVANZAR EN EL CUESTIONARIO DINAMICAMENTE
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
//Funcion para evaluar respuesta seleccionada
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


