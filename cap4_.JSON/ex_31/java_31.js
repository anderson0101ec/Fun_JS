/*
JSON
Un arcrivo . JSON es como una hola de  apuntes ordenada donde se guardan datos de manera clara para que una persona o un programa los puedad leer , entender y utiliazar.

Ejemplo: aga de cuenta que es como un cuaderno o libreta de notas donde usted escribe informacion importante de algien por ejemplo: su nombre, edad , direccion, telefono y esta informacion la mantiene en el mismo formato bien organizada para que usted o alguen requiera dicha informacion la pueda encontrar facilmente.

ejemplo tecnico:
Entidad personas o directorio personas
{
    "nombre":"su nombre completo"
    "edad": "tiene 40 años"
    "direccion":"carrera 25 #  38 - 65"
    "telefono": "3107406038"
    "email": "sucorreoelectronico@gmail.com"
    }

ejempo de un menu en archivo .JSON:

{
    "plato":"hamburguesa",
    "precio": "22000",
    "ingredientes": ["pan","lechuga","carne"],
    "disponible": true
}


Un archivo .json (JavaScript Object Notation) es un formato de texto ligero y fácil de leer/write utilizado para almacenar e intercambiar datos estructurados. Es independiente del lenguaje de programación, pero se basa en la sintaxis de objetos de JavaScript.
Características principales:

Estructura de datos:
Organiza la información en pares de clave-valor (como un diccionario).
Soporta arrays (listas ordenadas).

*/

let persona = {
    "nombre": "Daniela",
    "edad": 40,
    "aprendiz": "false",
    "recidencia":{"direccion":"calle 34 # 31 - 20", "ciudad":"palmira", "departamento":"valle del cauca"},
    "telefono": "3188688008"


}

let elementoTexto = document.getElementById('nombre');
elementoTexto.textContent = persona.nombre;

