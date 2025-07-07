/*============operadores ==========*/

// operadores de asignacion

let a = 1;

document.writeln('el valor de a = ', a);
document.writeln('<br>') ; // se crea para la etiqueta <br> desde el javascrip como elemento de html para hacer saltos de paginacion 
console.log('el valor de a = ', a);

a++; //el operador ++ aumenta o incrementa el valor en uno 
document.writeln('el valor de a = ', a);
console.log('el valor de a = ', a);
document.writeln('<br>');


a+=5; //el operador + aumenta o incrementa el valor segun su asignacion
document.writeln('el valor de a = ', a);
console.log('el valor de a = ', a);
document.writeln('<br>');

a-- ; // el operador -- decrementa el valor en uno. 
document.writeln('el valor de a = ', a);
console.log('el valor de a = ', a);
document.writeln('<br>');

a-=2; // el operador -= restar el vallor de la variable dependiendo del valor que se ponga despues del igual
document.writeln('el valor de a = ', a ,);
console.log('el valor de a = ', a);
document.writeln('<br>');

a*=2; //el operador *= multiplica el valor de la variable dependiendo del valor que se quiere mulwtiplicar. 
document.writeln('el valor de a = ', a);
console.log('el valor de a = ', a);
document.writeln('<br>');

a/=4; //el operador /=divide el valor de la variable dependiendo de valor que se quiera dividir. 
document.writeln('el valor de a = ', a);
console.log('el valor de a = ', a);
document.writeln('<br>');

a**=2; //el operador ** potencia el valor dependiendo el valor que se quiere potenciar
document.writeln('el valor de a = ', a);
console.log('el valor de a = ', a);
document.writeln('<br>');

// los operadores de comparacion sirven para comparar cantidades o valores entre variables.
/*
= es el operador de asignacion
> es el operador de mayor que
< es el operador de menor que
== es el operador igual que 
!= es el operador diferente de 
>= es el operador de mayor o igual que 
<= es el operador de menor o igual que 
*/

let valorUno, valorDos; /// se declaran las variables
//utilidad del operador de asignacion
valorUno = 20; //se inicializa la variable con un valor de tipo entero
valorDos = 10; //se inicializa la variable con un tipo de dato entero

// operador mayor que 
document.writeln(valorUno > valorDos, '<br>');
console.log(valorUno > valorDos);
//

//operador menor que 
document.writeln(valorUno < valorDos, '<br>');
console.log(valorUno < valorDos);
//

// operador de == igual que
document.writeln(valorUno == valorDos, '<br>');
console.log(valorUno == valorDos);
//


document.writeln(valorUno != valorDos, '<br>');
console.log(valorUno != valorDos);
//


document.writeln(valorUno >= valorDos, '<br>');
console.log(valorUno >= valorDos);
//

document.writeln(valorUno <= valorDos, '<br>');
console.log(valorUno <= valorDos);
//el sistema verificara si la variable no es menor o igual que la dos y devolveran 


