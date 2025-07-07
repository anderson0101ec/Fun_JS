// concepto 1 . clase (clase ) = plano de automovil

class Automovil {
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;

    }
    acelerar(){
        this.velocidad += 10;
        console.log(`${this.marca} ${this.modelo} va a ${this.velocidad}`);
    }
    frenar(){
        this.frenar = 0;
        console.log(`${this.marca} ${this.modelo} se detuvo`);
    }
}


//concepto 2:

const auto1 = new Automovil ('toyota','corolla')
auto1.acelerar();
auto1.frenar();


// concepto 3:

class camion extends Automovil{
    cargaPeso(peso){
        console.log(`${this.marca} ${this.modelo} esta cargando ${this.peso} kg`)
    }
}

const camion1 = new camion ('volvo','FH16');
camion1.acelerar();
camion1.cargaPeso(5000);

// 4 encapsulamiento = control de motor
class AutomovilEncapsulado {
    #motorEncendido = false;
    encenderMotor () {
        this.#motorEncendido = true;
        console.log('Motor encendido');
        
    }
    apagarMotor () {
        this.#motorEncendido = false;
        console.log('Motor apagado');

    }
    estadoMotor(){
        return this.#motorEncendido ? 'Encendido' : 'Apagado';
    }

}
const auto2 = new AutomovilEncapsulado();
    auto2.encenderMotor();
    console.log(auto2.estadoMotor());


//polimorfismo = acelerar de distintas formas
class Deportivo extends Automovil {
    acelerar() {
        this.velocidad += 30;
        console.log(`${this.marca} ${this.modelo} va a ${this.velocidad} Km/h (¡Veloz!)`);
    }
}


class sedan extends Automovil {
    acelerar(){
        this.velocidad += 10;
        console.log(`${this.marca} ${this.modelo} va a ${this.velocidad} Km/h`);
    }
}
const ferrari = new Deportivo('Ferrari', '488');
const nissan = new sedan('Nissan', 'Sentra');

ferrari.acelerar();
nissan.acelerar();


//6. abstraccion = ocultar lo complejo del arranque
class AutomovilAbstracto {
    arrancar(){
        this.#verificarSistema();
        this.#inyectarCombustible();
        console.log('Auto encendido')
    }

    #verificarSistema(){
        console.log('Verificando sistema...');
    }

    #inyectarCombustible(){
        console.log('Inyectando combustible...');
    }


}
const auto3 = new AutomovilAbstracto();
auto3.arrancar();


























//u contructor es un metdo especial  de dntro de una clase cuya funcion principal es inicializar un objeto cuando se crea, el constructor puede ser pensado cmo el encargad de dar identidad inicial a cada objeto, es decir como ejemplo de cuando se compra un celurar nuevo y antes de utilizarlo primero cinfiguras el idioma , red , cuentas, entre otros : esto seria lo que hace el contructor : prepara el objeto para que este listo para usarse.

/* contructor
asignarle valores iniciales
se ejecuta automaticamente cuando se utiliza la palabra new para crear un objeto
solo hay uno por clase (aunque pueda aver sobrecarga en algunos lenguajes como java o c#).
inicia los atributos (tambien llamados propiedades)*/


/*Atributs 

datos o creacteristicasque definen el estado de un objeto 
se guardan como variables 

Metodos
Defini el comportamiento o accion que realiza (logica)
utiliza atributos de ibjetos es decir que puede modificarlos muchaa veces */





