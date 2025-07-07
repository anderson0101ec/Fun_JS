// Funciones de tipo STRING

let palabra = "javascript";

document.writeln('la palabra es: ', palabra, '<br>');
console.log('palabra escrita', palabra);

document.writeln(palabra.toUpperCase(), '<br>');
document.writeln(palabra.toLocaleLowerCase(),'<br>');

let textoUno, textoDos;

textoUno = 'curso de ';
textoDos = 'Fundamentos de javascript';

document.writeln(textoUno.concat(textoDos), '<br>');

document.writeln(palabra.length); // contador de caracteres
console.log('palabra escrita', palabra.length,'<br>');