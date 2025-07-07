/* Acceder as archivos JSON con fetch*/

let datosJson;
fetch(`/cap4_.JSON/ex_32_practica_biblioteca/libros.json`)/*las ruta donde se encuentra ubicado el archivo. */
    .then(res=> res.json())/*las funciones then son promesas que van a ejecutar automaticamente una vez que la promesa se haya ejecutado exitosamente (200). Es decir, se ejecutara cuando reciba la respuesta .*/
    .then((salida)  => {
        /*Esta funcion se va a ejecutar una vez que la primera promesa se haya resuelto.*/
        datosJson = salida; /*se almacena en la variable del objeto json parseado para mostrarlo.*/

        let elementoTexto = document.getElementById(`titulo`); /*se obtiene el Id del HTML*/
        elementoTexto.textContent = datosJson.biblioteca[4].titulo; /*se muestra lo que se nesecita del objeto JSON. */ 
    })