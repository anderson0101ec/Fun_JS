/*promesas y silocitudes y respuestas

teoria

peticion

GET. se utiliza para obtener informacion de un servidor.
POST. se utiliza para enviar informacion al servidor.
PUT. se utiliza para actualizar un recurso en el servidor
DELETE. se utiliza para eliminar un recurso que se encuentra en el servidor.

Respuesta:
las respuestas a esta peticion o solicitudes http van a tener con sigo un codigo de estado http estos codigos son numeros que indican cual a sido el resultado de las solicitudes y codigos mas comunes que se pueden resivir son:

el codigo 200 rara indicar que la respuesta fue ejecutada exitosamente.
el codigo 201 que indica cuando el elemento se a creado en caso de que se haya solicitado eso.
el codigo 204 que se significa que la resouesta a venido sin contenido
el codigo 400 que quiere decir que es una solicitud incorrecta 
el codigo 401 que significa que la solicitud no fue autorizada por el servidor al que le estan pidiendo.

200 respuesta completa 
201 elemento creado
204 respuesta vacia
400 mal solicitado
401 no autorizado

resumen:
las promesas y solicitusdes http son muy importantes en javascript para poder mejorar la sincronia y la comunicacion con los servidores externos y con ellos se puede crear aplicaciones dinamicas responcivas que pueda actualizarse y que cambien el tiempo real sin bloquear la ejecucion del resto de la aplicacion.

catch: la funcionalidad de catch es un metodo que se utiliza en promesas para manejar posibles errores, es una forma de atrapar a cualquier error que ocurra en el codigo dentro de una promesa y realiza una accion especifica en caso de que ocurra dicho error .

*/

//let datosJson;
//fetch(`/cap4_.JSON/ex_32_practica_biblioteca/libros.json`)
//    .then(res=> res.json())      
//    .then((salir))
//        let elementoTexto = document.getElementById(`titulo`);
//        elementoTexto.textContent = datosJson.biblioteca[4].titulo; 
//    })
//    .catch(function(error){alter(error)});

let datosJson;
fetch('/cap4_.JSON/ex_32_practica_biblioteca/libros.json')
    .then(res=> res.json())      
    .then((salida) => {
        const contenedor = document.getElementById('contenedor');
        salida.biblioteca.forEach((libro,index) => {
            const divLibro = document.createElement('div');
            divLibro.innerHTML = `
                <h3>Libro ${index + 1}</h3>
                <p><Storage>Titulo:</Storage>${libro.titulo || 'No definido'} </p>
                <p><Storage>Editorial:</Storage>${libro.editorial || 'No definido'} </p>
                <p><Storage>Edición:</Storage>${libro.edicion || 'No definido'} </p>
                <p><Storage>ISBN:</Storage>${libro.isbn || 'No definido'} </p>
                <p><Storage>Autor principal:</Storage>${libro.autores["autor principal"] || 'No definido'} </p>
                <p><Storage>Codigo SENA:</Storage>${libro["codigo sena"].join(', ') || 'No definido'} </p>
                <p><Storage>Descripción:</Storage>${libro.descripcion || 'No definido'} </p>
                <hr>
                `;
            contenedor.appendChild(divLibro);
        });
    })
    .catch(error => alert("Error: " + error))