"use strict"
//javascript del formulario y el captcha

document.addEventListener("DOMContentLoaded", captcha);

let btnRefresh = document.querySelector('#btn-refresh');
btnRefresh.addEventListener('click', captcha);

let form = document.querySelector('#form');
form.addEventListener('submit', validcap);

function captcha(){
    let digitos = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let a = digitos[Math.floor(Math.random() * 62)];
    let b = digitos[Math.floor(Math.random() * 62)];
    let c = digitos[Math.floor(Math.random() * 62)];
    let d = digitos[Math.floor(Math.random() * 62)];
    let e = digitos[Math.floor(Math.random() * 62)];
    let f = digitos[Math.floor(Math.random() * 62)];
    let g = digitos[Math.floor(Math.random() * 62)];

    let cap = a + b + c + d + e + f + g;
    console.log(cap);
    document.querySelector(".preview p").innerHTML = cap;
};

function validcap(e) {
    e.preventDefault()
    let cap = document.querySelector(".preview p").innerHTML;

    let texto = document.getElementById("respuesta__captcha").value;

    let mensajes = ["Captcha correcto!", "Captcha incorrecto"];

    if ((texto == mensajes[0]) || (texto == mensajes[1])) { //Comprueba si ponen los mensajes antes mostrados
        captcha();
        document.querySelector('#respuesta__captcha').value = "";//Vacia el campo de texto
    } else if (cap == texto) {
        document.querySelector(".preview p").innerHTML = mensajes[0];
    } else if (cap != texto) {
        document.querySelector(".preview p").innerHTML = mensajes[1];
        document.getElementById("respuesta__captcha").value = "";//Vacia el campo de texto
    }
};