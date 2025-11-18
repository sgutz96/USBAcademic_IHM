/*
// Cosola de JavaScript
console.log("Hola Mundo");
console.log(5);
console.log(10 + 5);

var nombre = "Juan";
console.log(nombre);

// Tipos de datos
var apellido = 'Pérez';
console.log("Apellido:", apellido);

var num1 = 10;
var num2 = 5.5;
var suma = num1 + num2;
console.log("La suma es:", suma);

var isActive = true;
console.log("isActive:", isActive);

if (isActive == 1) {
    console.log("La variable isActive es verdadera");
}
*/
/*
var edad = 25;
edad = 26; // Reasignación de variable
let esEstudiante = true;
esEstudiante = false; // Reasignación de variable
const PI = 3.1416;
// PI = 3.14; // Esto causaría un error porque PI es una constante

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Es estudiante:", esEstudiante);
console.log("Valor de PI:", PI);
*/

/*
let Nombre = prompt("Ingrese el primer número:");
let Apellido = prompt("Ingrese el segundo número:");
let nombreCompleto = Nombre + " " + Apellido;
console.log("Nombre completo:", nombreCompleto);
alert(`El resultado es: ${nombreCompleto}`);
*/

/*
let numero1 = Number(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let numero3 = parseInt(prompt("Ingrese el tercer número:"));
let sumaNumeros = numero1 + numero2 + numero3;
console.log("La suma de los números es:", sumaNumeros);
alert(`La suma de los números es: ${sumaNumeros}`);
*/

// Operaciones matemáticas
/*
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let operacion = prompt("Ingrese la operación a realizar");
let resultado = eval(operacion);
console.log("El resultado de la operación es:", resultado);
alert(`El resultado de la operación es: ${resultado}`);
*/
/*
// Arreglos
let frutas = ["Manzana", "Banana", "Cereza"];
console.log("Frutas:", frutas);
console.log("Primera fruta:", frutas[0]);

frutas.push("Naranja");
console.log("Frutas después de push:", frutas);


frutas.pop();
console.log("Frutas después de pop:", frutas);

frutas.splice(1, 1); // Elimina el segundo elemento
console.log("Frutas después de splice:", frutas);
console.log("Número de frutas:", frutas.length);


frutas.sort();
console.log("Frutas ordenadas:", frutas);

frutas.reverse();
console.log("Frutas en orden inverso:", frutas);

console.log("Índice de Banana:", frutas.indexOf("Banana"));
frutas.splice(frutas.indexOf("Banana"), 1); // Elimina "Banana"
console.log("Frutas después de eliminar Banana:", frutas);

frutas = []; // Vaciar el arreglo
console.log("Frutas después de vaciar:", frutas);
*/

var num1 = 10;
var num2 = 5;
var num3 = 15;


var x = (num1>num2)&&(num3>num1);
console.log(x);

var y = (num1>num2)||(num3<num1);
console.log(y);

var z = !(num1>num2);
console.log(z);







