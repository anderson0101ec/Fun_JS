// operadores matematicos

let a, b;// aqui va dar un error es normal
let c, d;//aqui las operaciones van a dar 
let suma, mult, div, residuo, potencia; //variables para obtener los resultados de los operadores

// a = prompt('Ingresar un numero:  ');
// b = prompt('Ingrese otro numero:  ');

//resultados de las operacions
suma = a + b;
resta = a - b;
mult = a * b;
div = a / b;
residuo = a % b;
potencia = a ** b;

// document.writeln(
//     'la suma es;  ', suma,'<br>',
//     'la reta es;  ', resta, '<br>',
//     'la multiplicacion es;  ', mult, '<br>',
//     'la divicion es;  ', div, '<br>',
//     'la residuo es;  ', residuo, '<br>',
//     'la potencia es;  ', potencia, '<br>',
// )

// segundas operaciones
//para que las operaciones numericas se pueda dar correctamente, se debe comvertir los datos ingresados con parseInt o  parseFloat.

c = parseInt(prompt('Ingresar un numero:  '));
d = parseFloat(prompt('Ingrese otro numero:  '));

//resultados de las operacions
suma = c + d;
resta = c - d;
mult = c * d;
div = c / d;
residuo = c % d;
potencia = c ** d;

document.writeln(
    'la suma es;  ', suma,'<br>',
    'la reta es;  ', resta, '<br>',
    'la multiplicacion es;  ', mult, '<br>',
    'la divicion es;  ', div, '<br>',
    'la residuo es;  ', residuo, '<br>',
    'la potencia es;  ', potencia, '<br>',
)
//