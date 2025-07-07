function seleccion(){
let cantidad = 0; 
// esta es la estructura de seleccion de cada texto
if(document.getElementById('check1').checked){
    cantidad++;
    // este es el incremento de manera que selecciona el se va autosumando de uno en uno
}
if(document.getElementById('check2').checked){
    cantidad++;
}
    if(document.getElementById('check3').checked){
    cantidad++;
    }
if(document.getElementById('check4').checked){
    cantidad++;
}
if(document.getElementById('check5').checked){
    cantidad++;
}
// este es el texto final o mensaje que vamos a ver en pantalla con la repuesta que a elegido el usuario 
if(cantidad === 1){
    swal(`conoces ${cantidad} lenguajes de programacion`);
}else {
    swal(`conoces ${cantidad} lenguajes de programacion`);
}
}
