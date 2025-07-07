function focalizar(){
    document.getElementById('nombre').value ='';
    document.getElementById('nombre').style.border ='';
    document.getElementById('nombre').style.borderRadius ='8px';
}
function validarVacios(){
    document.getElementById('nombre').value ='';
    document.getElementById('nombre').style.border ='2px solid violet';
    document.getElementById('nombre').style.borderRadius ='4px';
    swal('¡Debe de ingresar el nombre.!')
}

//son los detalles de como se va modificar la casilla y de que color quiero que se vea,