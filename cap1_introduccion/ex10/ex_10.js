/*CONDICONALES

Funcionalidades que permiten mejorar la toma de desiciones en la ejecucion de l codigo, estas deciciones se vasan en evaluar si una o mas condiciones son verdaderaso falsas es decir si se cumple algo en cieras situaciones , parametro de  



*/



let nombre, edad;
nombre = prompt ('ingresa tu nombre: ');
edad = prompt('Ingresa tu edad: ');
edad = parseInt(edad);

if (edad >= 18) { 
    document.writeln('Tu eres mayor de edad');
    console.log ('edad digitada', edad, 'Mayor de edad');
} else {
    document.writeln('Tu eres menor de edad');
    console.log('edad digitada; ', edad, 'Menor de edad')
}
