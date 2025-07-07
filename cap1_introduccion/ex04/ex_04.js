//pedir datos a un usuario (como ejercicio pues cuando se pidan dato se utilizan inputs)

let nombre, edad, direccion, movil, email;// se puede crear tantas variables como se neseciten con una declaracion let.

//prompt es una palabra reservada que despliega una fincion y sale un mensaje de tipo aleatorio.

nombre = prompt('Escriba su nombre: ')
document.writeln('Tu nombre es :  ', nombre, '<br>' ); // br es una etiqueta pa cambiar de espacio como el enter

edad = prompt('Digite su edad:', edad, '<br>');//Pide los datos al usuario
document.writeln('Tu edad es :  ' , edad, '<br>');

direccion = prompt('Escriba su direccion: ');// pide los datos al usuario
document.writeln ('Vives en :  ', direccion, '<br>');

movil = prompt ('Escriba su movil');// pide los datos al usuario
document.writeln ('Tu numero movil es :  ', movil, '<br>');

email = prompt ('Escriba su email: ');
document.writeln('Tu email es :   ', email, '<br>');// se imprimen los datos proporcionados por el usuario


//con la etiqueta <br> se puede realixar saltos de pagina

console.log('Tu nombre es: ', nombre, edad, direccion, movil, email);