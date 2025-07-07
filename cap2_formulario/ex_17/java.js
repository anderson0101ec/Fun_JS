// ejercicio de contador 

let contador = 0 

function actualizarVistas(){
    document.getElementById('valorContador').textContent = `valor: ${contador}`;
}

function incrementar(){
    contador++;
    actualizarVistas();
}

function decrementar(){
    contador--;
    actualizarVistas();
}