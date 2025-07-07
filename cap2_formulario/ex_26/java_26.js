function pesta(){
    let pestan = open();
    pestan.document.writeln('Se abrio una nueva ventana');

}

function ventana(){
    let ventana = open ('', '', 'width=400, height=250');
    ventana.document.writeln('Se abrio como una nueva ventana');
}


function confirmar(){
    let respuesta = confirm('¿Desea salir del sitio?');
    if(respuesta = true){
        window.close();
    }
}

// explicacion:
/*    let ventana = open ('', '', 'width=400, height=250');   

en este caso las comillas indican que no carga una URL especifica, ademas, que debe dessanclarse del navegador actual y crear una nueva ventana con dimenciones especificas.*/

function redireccionar(){
    if(window.confirm('¿Desea salir de la pagina actual?')){
        window.location= 'https;//github.com'
    }   
}

//conteo y disponibilidad de caracteres

document.getElementById('texto').addEventListener('keyup',caracteres);
function caracteres(){
    let cant = document.getElementById('texto').value.length;
    let disponible = 20 - parseInt(cant)

    document.getElementById('cantidad').innerHTML= disponible;
    if(disponible == 0){
        swal('cantidad de caracteres agotados')
    }
}

