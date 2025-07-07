let control = 0;
let contraseña = '12345678';

function verificar(){
    let clave = document.getElementById('clave').value;

    if(clave != contraseña || clave ==''){
        alert('contraseña incorecta o vacia, intentelo de nuevo','<br>');
        control++;
            if(control>=3){
                alert('agoto el numero de intentos permitido, acceso bloqueado... conectate a servicio tegnico' );
            }
    }else{
        window.open('https://www.google.com/?hl=es')
    }
}
