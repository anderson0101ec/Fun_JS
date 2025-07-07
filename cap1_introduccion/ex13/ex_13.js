//mostrar del 1 a 5 
//se usa cuando sabemos cuantas veces queremos repetir algo.
for (let numero = 1; numero <= 5; numero++ ) {
    console.log('numero actual:', numero);
}


//Mostrar los datos de una persona
//se usa para recolectar las propiedades de un objeto
let persona ={
    nombre: 'Carlos',
    edad: 25,
    ciudad:'Bogota'
};

for ( let propiedad in persona) {
    console.log (propiedad + ':' + persona[propiedad]);
}

//contar hasta 3 con el while
//se usa cuado no sabemos cuantas veces , pero tenemosuna condicion que se valua de entrada.
let contador = 1;

while (contador <= 3) {
    console.log('contador:',contador);
    contador++;
}

// //igual que while, pero siempre ejecuta almenos una vez 
// //mostrar el menu asta que el usuario elija "salir"
// let opcion ='';

// do{
//     opcion = prompt('Escriba una opcion ( Escriba "salir" para terminar):');
//     console.log('Elegiste:'.opcion);
// } while (opcion !== "salir");

// //este se usa para recorrer valores de arreglos ( no objetos).
// //recorrer una lista de frutas
// let listaDeFrutas = ['manzanas', 'banana', 'uva'];

// for (let fruta of listaDeFrutas) {
//     console.log('Fruta',fruta);
// }

// // ciclos de los numeros pares
// document.writeln('ciclo de numeros pares');

// for (let x = 2; x <= 20 ; x+=2) {
//     document.writeln(`valor de x = ${x},`, `<br>`);
// }

let usuario, clave, control;

control = 0;
usuario = prompt('Ingrese el usuario...');
clave = prompt('Ingrese su contraseña:');

do {
    if(clave != 'MiContraseña'){
        clave =prompt('contraseña incorrecta, Intentelo de nuevo...');
        control = 0; //continuara valiendo 0 mientras la clave digitada sea diferente ala establecida en el sistema.
    }else {
        control = 1;  //control valdra 1 cuando la contraseña ingresada sea correcta.
    

    }
}while (control != 1);
//la contraseña ingresada es verificada por control, si vale 1 le dara acceso al sistema si no continuara pidiendola 
//hasta que se cumpla la condicion o programe los intentos 
document.writeln('Acceso consedido!, Bienvenido');



