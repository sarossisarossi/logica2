let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

condicionesIniciales();
console.log(numeroSecreto);



function asignarTextoElemento(elemento,texto){

    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;

}

function generarNumeroSecreto(){
    
    return Math.floor(Math.random()*10)+1;

}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1 ;
}

function verificarIntento(){
    console.log(intentos)
    let numeroDeUsuariostr = document.getElementById('valorUsuario').value;
// numeroDeUsuariostr es un string, para que lo tome como numerico es la linea q vien a continuacion
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

//     console.log(typeof(numeroDeUsuario ))
//     console.log(numeroDeUsuario);
//     console.log(numeroSecreto);
//     console.log(typeof(numeroSecreto ))
// // === ; es validacion en tipo de dato y valor == puede ser igual en valor pero un str con un int
//     console.log(numeroDeUsuario === numeroSecreto);

    if (numeroDeUsuario == numeroSecreto ){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);
        removerDisabled();
    } else {
        if ( numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'el número secreto es menor')
        } 
        else{
            asignarTextoElemento('p', 'el número secreto es mayor')
        }
        intentos ++
        limpiarCaja()
    }
    return numeroDeUsuario;

}

function limpiarCaja(){
    // let valorCaja = document.querySelector('input');
    // alternativa colocar document.queryselector('#valorUsuario')   ; colocarle el # significa que busca por el id
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value ='';
}

function removerDisabled(){
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function reiniciarJuego(){
    limpiarCaja();
    // indicar mensaje de numeros

    // generar numero aleatorio
    
    // boton desabilitar
    // inicializar numero de intentos
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true)
    
}