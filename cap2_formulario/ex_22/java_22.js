function seleccion(){
let cantidad = 0; 
// este es el texto que va a salir en pantalla cuandon el usuario seleccione su casilla
if(document.getElementById('r1').checked){
   swal('Horario de 08:00 a.m hasta 12:00 m.d');
}
if(document.getElementById('r2').checked){
   swal('Horario de 02:00 a.m hasta 06:00 p.m');
}
    if(document.getElementById('r3').checked){
   swal('Horario de 07:00 a.m hasta 10:00 p.m');
    }
}
