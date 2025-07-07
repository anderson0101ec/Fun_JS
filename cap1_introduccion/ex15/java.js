function vercolor(){
    valor = parseInt(prompt("por favor inigrese numeros entre 1 y 3 para activar el microfono..."));

    switch(valor){
        case 1:
            return "perfecto has elegido el color: rojo";
        case 2:
            return "perfeco has elegido el color: verde";
        case 3:
            return "perfecto has elegido el color: amarillo";
        default:
            return"no ha ingresado un valor o numero correcto lea bien "
    }

}
document.writeln( vercolor());