/*

los paradigmas principalmente que dan paso a la poo son con estado, junto con el imperativo  y el declarativo

pilares de la programacion orientada a objetos 

abstraccion: oculta detalle internos y muestra las caracteristicas relevantes.
encapsulamiento:protege los datos de un objeto para evitar accesos indebidos, promoviendo el uso de metodos publicos para interactuar con ellos.
herencia :permite que uuna clase reutilice los atributos y metodos de otra, promoviendo la extensioin y personalizacion 

polimorfismo: habilidad de un metodo o funcion para comportarse de diferentes maneras segun el objeto o los argumentos con los que interactua.



*/

class vehiculo {
    constructor(marca,modelo,color,anio) {

        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.anio = anio ;
        this.encendido = false;
}

    encender(){
        this.encendido = true;
        console.log(`${this.marca} ${this.modelo} esta encendido.`);
    }
    apagar(){
        this.encendido = false;
        console.log(`${this.marca} ${this.modelo} esta apagado.`);
    }
    tocarBocina(){
        this.encendido = false;
        console.log("¡Beep beep¡");
    }
    mostrarInfo(){
        console.log(`vehiculo: ${this.marca} ${this.modelo} (${this.anio}) - color: ${this.color}`)
    }
}
// crear instancia

const miAuto = new vehiculo ("toyota", "corolle", "rojo", 2020)

//probar los metodos
miAuto.mostrarInfo();
miAuto.encender();
miAuto.tocarBocina();
miAuto.apagar();

//clase animal
class Animal{
constructor(nombre, especie, sonido){
        this.nombre = nombre;
        this.especie = especie;
        this.sonido =sonido;
    }
    hacerSonido(){
    console.log(`${this.nombre} dice: ${this.sonido}`);
    }
    describir(){
    console.log(`${this.nombre} dice: ${this.especie}`);

}
}
//crear instancia
const miPerro = new Animal("Bruno","Perro","guau guau");
const miGato = new Animal("Karin","Gato","miau miau");

// provar los metodos
miPerro.describir();
miPerro.hacerSonido();

miGato.describir();
miGato.hacerSonido();

const auto = new vehiculo("ford", "mustang", "azul", 2024);
auto.mostrarInfo();
auto.encender();
auto.tocarBocina();
auto.apagar();


const perro = new Animal("rex", "perro", "guau");
perro.describir();
perro.hacerSonido();

const Gato = new Animal("sefiro", "gato", "miau");
Gato.describir();
Gato.hacerSonido();


