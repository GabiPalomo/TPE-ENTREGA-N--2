'use strict'
//javascript del index
//abajo, se toma como entrada el boton del menu, cuando se aprieta se llama a una funcion anonima que hace aparecer el menu
var menuButton = document.querySelector('#menuButton');
var menuList = document.querySelector('#menuList');

menuButton.addEventListener('click', function(e) {
  e.preventDefault();
  menuList.classList.toggle('show');
  console.log("funcionando")
});
