let NumeroSecreto = 0;
let intento = 0;
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
return;
}
function verificarIntento(){
    let numeroDeUsuario = document.getElementById('valorUsuario').value;
    
    if (numeroDeUsuario == NumeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intento} ${(intento === 1)? 'Vez': 'Veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
    if (numeroDeUsuario > NumeroSecreto){
        asignarTextoElemento('p','El numero es menor');
    } else {
        asignarTextoElemento('p','El numero es mayor');
    }
    intento ++;
    limpiarca(); 
    }
    return;
}
function limpiarca(){
    let caja = document.querySelector('#valorUsuario');
    caja.value = '';
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto'); 
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`); 
    NumeroSecreto = generaNumeroSecreto();
    intento = 1;

}
function generaNumeroSecreto(){
return Math.floor(Math.random()*numeroMaximo)+1; 
}
function reiniciarjuego(){
limpiarca();
condicionesIniciales();
document.querySelector('#reiniciar').setAttribute('disabled','true')
}
condicionesIniciales();