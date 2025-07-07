let area = document.getElementById('comentarios')
area.style.resize = 'none';
// estos son los mensajes de alerta que  se le va apresentar al usuario
function comentar(){
    const comentario = document.getElementById('comentarios').value.trim();
    
    if( comentario.length === 0){ 
        swal ('Usted no a escrito ninguna letra, Por favor escriba antes de enviar el comentario')
    }
    else if (comentario.length > 100) {
        swal('El comentario es muy largo sintetice la idea y vuelva a escribir.')
    }else {
        swal('¡Gracias por sus comentarios!')
    }
}
