"use strict";
//objeto con opciones precargadas
let smartphone = [
  {
    nombre: "galaxy s8",
    ram: 4,
    almacenamiento: 64,
    camara: 20,
  },
  {
    nombre: "iphone 8",
    ram: 4,
    almacenamiento: 128,
    camara: 32,
  },
];
document.addEventListener("DOMContentLoaded", refillSelectOptions);
//se toma el boton y se le da la funcion agregar
let addItem = document.querySelector('#btn-add-item');
addItem.addEventListener('click', agregar);
//se toma ambos selectores
let selectItem1 = document.getElementById("select-item1");
let selectItem2 = document.getElementById("select-item2");
//se toma el boton mostrar y se le agrega esa funcion
let btnShowItems = document.getElementById("btn-show-item");
btnShowItems.addEventListener("click", mostrar);
//se toma la tabla
//toma el boton y le asigna la funcion clear
let btnClear = document.querySelector('#btn-clear-table');
btnClear.addEventListener('click', clear);
//funcion agregar, toma los valores de los input y crea un nuevo item
function agregar() {
    let nombre = document.querySelector('#nombre').value;
    let ram = document.querySelector('#memoria-ram').value;
    let almacenamiento = document.querySelector('#almacenamiento').value;
    let camara = document.querySelector('#camara').value;

    let itemNuevo = {
        nombre: nombre,
        ram: ram,
        almacenamiento: almacenamiento,
        camara: camara,
    };
  
    smartphone.push(itemNuevo);

    let index = smartphone.length - 1;
    let option1 = createOption(index, itemNuevo.nombre);
    let option2 = createOption(index, itemNuevo.nombre);
    selectItem1.appendChild(option1);
    selectItem2.appendChild(option2);

    document.querySelector('#nombre').value = '';
    document.querySelector('#memoria-ram').value = '';
    document.querySelector('#almacenamiento').value = '';
    document.querySelector('#camara').value = '';
}
//la funcion mostrar toma lo escojido en los selectores y llama a mostrarse en el documento
function mostrar() {
    let selectedIndex1 = selectItem1.value;
    let selectedIndex2 = selectItem2.value;
    

    let selectedItem1 = smartphone[selectedIndex1];
    let selectedItem2 = smartphone[selectedIndex2];

    dinamicTable.innerHTML = "";

    if (selectedItem1) {
        let row1 = createTableRow(selectedItem1);
        dinamicTable.appendChild(row1);
    }

    if (selectedItem2) {
        let row2 = createTableRow(selectedItem2);
        dinamicTable.appendChild(row2);
    }
}
//esta funcion crea la tabla y la muestra por pantalla
function createTableRow(item) {
    let row = document.createElement("tr");
    let html = `
    <td class="table-td">${item.nombre}</td>
    <td class="table-espect">${item.camara}mpx</td>
    <td class="table-espect">${item.ram}Gb</td>
    <td class="table-espect">${item.almacenamiento}Gb</td>
  `;
    row.innerHTML = html;

    return row;
  }

function refillSelectOptions() {
    selectItem1.innerHTML = "";
    selectItem2.innerHTML = "";
  
    smartphone.forEach((item, index) => {
      let option1 = createOption(index, item.nombre);
      let option2 = createOption(index, item.nombre);
      selectItem1.appendChild(option1);
      selectItem2.appendChild(option2);
    });
}

function createOption(value, text) {
    let option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    return option;
}

function clear () {
    dinamicTable.innerHTML = '';
}