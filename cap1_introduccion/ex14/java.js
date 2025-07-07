//ejercicio de analisis: pedir al usuario que digite algun tipo de valor
let a = 1;
let suma = 0;
let valor;

while(a <= 6){
    valor = parseInt(prompt("ingrese tres  valores numerico"));
    suma = suma + valor;
    a++;
}
document.writeln("la suma es: ", suma, "<br>");1
s
//Rifa
let numero;
do{
    numero= parseInt(prompt("rifa: numeros entre el 1 y el 15"));

    if(numero!=5){

        document.writeln("usted dio el numero: ", numero,"<br>");
    }else{
        document.writeln("¡genial! has ganado, el numero correcto era el: ", numero , "reclama tu premio")
    }


}while(numero !=5);