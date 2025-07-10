const pantalla = document.getElementById('pantalla')

function insertar(valor) {
    pantalla.value += valor;
}
function borrar(){
pantalla.value = '';
}
function calcular(){
    try{
        //cerramos funciones abiertas (oppcionalmente puedes validar mas )
        pantalla.value = eval(pantalla.value);
    } catch (e){
        pantalla.value ='Error';
    }
}