const nombreUsuario = document.getElementById("nombre-usuario");
const boton = document.getElementById("boton");
const contenedor = document.getElementById("contenedor");
const validarNombre = document.getElementById("validacion");
const botonRegresar = document.createElement("button");
let titulo = document.getElementById("titulo11");
const h3 = document.createElement("h3");
const h2 = document.createElement("h2");
const juego1 = document.createElement("button");
const juego2 = document.createElement("button");
const botonInicio = document.createElement("botton")
const avisoUsuarioVacio = document.createElement("h4");
avisoUsuarioVacio.innerHTML = "Debe ingresar un Nombre de Usuario";
validarNombre.addEventListener("click", function () {
    if (nombreUsuario.value.trim() != '') {
        boton.style.visibility = "visible";
    } else {
        contenedor.innerText = "";
        contenedor.appendChild(avisoUsuarioVacio);
        contenedor.style.fontSize = "1.5em"
        botonRegresar.innerText = "Regresar";
        botonRegresar.classList.add("boton-regreso");
        contenedor.appendChild(botonRegresar);
    }

})
boton.addEventListener("click", function () {
    contenedor.innerHTML = '';
    h2.classList.add("titulo-juego");
    contenedor.classList.add("seleccionar-juego");
    h3.classList.add("seleccionar-juego-h3");
    h3.innerHTML = "Seleccione un juego";
    h2.innerHTML = "Bienvenido " + nombreUsuario.value;
    juego1.innerText = "Primer Juego";
    juego2.innerHTML = "Segundo Juego";
    botonInicio.innerHTML = "Volver al inicio";
    juego1.classList.add("boton-juego");
    juego2.classList.add("boton-juego");
    botonInicio.classList.add("boton-juego");
    contenedor.appendChild(h2);
    contenedor.appendChild(h3);
    contenedor.appendChild(juego1);
    contenedor.appendChild(juego2);
    contenedor.appendChild(botonInicio);
})

juego1.addEventListener("click", function () {
    window.location.href = "primerJuego.html";
})
botonInicio.addEventListener("click", function () {
    window.location.href = "index.html";
})
juego2.addEventListener("click", function () {
    window.location.href = "segundojuego.html";
})

botonRegresar.addEventListener("click", function () {
    location.reload();
})
