let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto)



function asignarTextoElemento(elemento,texto){

    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;

}

function generarNumeroSecreto(){
    
    return Math.floor(Math.random()*10)+1;

}


asignarTextoElemento('h1','Juego del número secreto')
asignarTextoElemento('p','indica un numero del 1 al 10')

function verificarIntento(){

    let numeroDeUsuariostr = document.getElementById('valorUsuario').value;
// numeroDeUsuariostr es un string, para que lo tome como numerico es la linea q vien a continuacion
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(typeof(numeroDeUsuario ))
    console.log(numeroDeUsuario);
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto ))
// === ; es validacion en tipo de dato y valor == puede ser igual en valor pero un str con un int
    console.log(numeroDeUsuario === numeroSecreto);
    return numeroDeUsuario;

}


