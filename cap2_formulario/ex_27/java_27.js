
function comenzar(){
    setTimeout(cumplido, 5000);
}

function cumplido(){
    swal ('¡Se agoto el tiempo!');
}

function iniciar(){
    let elegirSegundos = document.getElementById('tiempoElegido').value;
    setTimeout(finalizado, 1000 * elegirSegundos);
}


function finalizado(){
    swal('¡Se ha agotado el tiempo!');
}

// cuenta regresiva
function cuentaRegresiva(){
    let elegirSegundos= document.getElementById('tiempoCronometro').value;
    let contador = document.getElementById('contador');
    let textoTiempo = document.getElementById('txtTiempo');
    textoTiempo.style.color = 'blueviolet';

    textoTiempo.style.display = 'none' ; // no mostrar el texto de inicio
    
    if (!elegirSegundos || elegirSegundos <= 0) {
        swal('Por favor, ingrese un tiempo valido');
        return;
    }

    //canbiar texto indicando que el temporizador a iniciado
    textoTiempo.style.display = 'block';
    textoTiempo.textContent = '¡Tiempo inicializado!';
    textoTiempo.style.color = 'Green';

    // inicia la cuenta regresiva
    function actualizarContador(segundosRestantes){
            contador.textContent = segundosRestantes;

            if(segundosRestantes > 0){
                setTimeout(() => actualizarContador(segundosRestantes - 1), 1000);
            }else{
                textoTiempo.textContent = 'Texto finalizado!';
                textoTiempo.style.color = 'blueviolet';
                swal('¡se ha agotado el tiempo!');

                // vaciara 
                document.getElementById('tiempoCronometrado').value = '';
            }
    }

    actualizarContador(elegirSegundos);



}