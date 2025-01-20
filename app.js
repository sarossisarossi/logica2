
let titulo = document.querySelector('h1');
    titulo.innerHTML = 'Juego del número secreto'

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'indica un numero del 1 al 10'


function asignarTextoElemento(elemento,texto){

    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto

}

asignarTextoElemento('h1','Juego del número secreto')
asignarTextoElemento('p','indica un numero del 1 al 10')

function intentoDeUsuario(){

    alert('click desde el boton')
}


