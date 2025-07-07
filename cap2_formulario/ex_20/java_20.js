function saludar(){
    swal('¡Hola Mundo!') // este es el saludo predeterminado que aprece en pantalla
}
// permite modificar que tipo de mensaje es el que quiero ver en pantalla de manera ya modificada. 
function saludoPersonalizado(){
    swal({
        title: '¡Que Tal Mundo!', //esta es la configurascion del mensaje en pantalla 
        text: 'Bienbenido al curso fundamentos de javaScript',
        icon:'success',
        button:'¡Engine!'
    })
}