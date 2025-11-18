/*
// Ejercicio 1: Solicitar al usuario su nombre y saludarlo.
let nombre = prompt('Por favor ingresa tu nombre: ');
alert(`Hola ${nombre}, bienvenido a la clase de JavaScript`);
*/

/*
// Ejercicio 2: Solicitar al usuario un número y determinar si es par o impar.
let numero = Number(prompt('Por favor ingresa un número y te diré si es par o impar: '));
if (numero % 2 == 0) {
    alert(`El número ingrasado: ${numero} es par`);
} else {
    alert(`El número ingresado: ${numero} es impar`);
}
*/

/*
// Ejercicio 3: Solicitar al usuario que elija su película favorita de una lista y mostrar un mensaje con la elección.
let peliculaElegida = prompt(`Por favor elegí cuál de estas películas es tu favorita: 
1- Coco
2- Relatos salvajes
3- Intocable
4- El señor de los anillos`);

// Evalúa cada uno de los casos con el condicional switch (utilizaremos este método para practicarlo). En el bloque de código de cada case le diremos que “su ticket ha sido emitido”, pero, lo haremos a través del método document.write() y en su argumento(dentro de los paréntesis) haremos un template literals con el formato HTML del texto y la imagen de la película elegida.
let pelicula = document.getElementById('pelicula')
var resultado = "";
switch (peliculaElegida) {
  case 1:
    resultado = "tiket para Coco ha sido emitido";
    break;
  case 2:
    resultado = "tiket para Relatos salvajes ha sido emitido";
    break;
  case 3:
    resultado = "tiket para Intocable ha sido emitido";
    break;
  default:
    resultado = "tiket para El señor de los anillos ha sido emitido";
    break;
}
console.log(resultado);
*/
/*
// Ejercicio 4: Juego de adivinanza de números
const numeroSecreto = Math.floor(Math.random() * 6);
console.log(numeroSecreto);
const numeroUsuario = parseInt(prompt('Por favor, adivine el numero que estoy pensando 0 al 5. Ingreselo y veremos: '));
if (numeroSecreto === numeroUsuario) {
    alert('Felicitaciones! Adivinaste el número!');
} else {
    alert('Perdiste! Intenta de nuevo.');
}
*/
/*
// Ejercicio 5: Solicitar al usuario su edad y determinar si es mayor o menor de edad.
var edad = parseInt(prompt("Por favor ingresa tu edad: "));
if (edad >= 18) {
    alert("Eres mayor de edad.");
} else {
    alert("Eres menor de edad.");
}
*/
/*
// Ejercicio 6: Contar del 0 al 10 utilizando un bucle for.
var num = 10;
for (var i = 0; i <= num; i++) {
    console.log("El valor de i es:", i);    
}
console.log("---");   
for (var j = num; j >= 0; j--) {
    console.log("El valor de j es:", j);    
}
console.log("---");   
for(var i = 0; i <= num; i++){
    console.log("El valor de i es:", i); 
    if(i == 5){ 
        continue; 
    }
}
console.log("---");   
for(var i = 0; i <= num; i++){
    console.log("El valor de i es:", i); 
    if(i == 5){ 
        break; 
    }
}
*/
/*
// Ejercicio 7: Solicitar al usuario una contraseña y permitirle tres intentos para ingresarla correctamente.
let contrasenia = prompt('Por favor ingrese su contraseña: ');
let contraseniaGuardada = "Hola123";
for (i = 0; i < 3; i++) {
    if (contrasenia != contraseniaGuardada) {
        contrasenia = prompt(`No ingreso la contraseña correcta, por favor vuelva a ingresarla, recuerde que son tres intentos: `); i += 1;
    } else {
        alert(`Felicitaciones ingresó la contraseña correcta!`)
    }
}
*/
/*
// Ejercicio 8: Mostrar la tabla de multiplicar de un número ingresado por el usuario.
let numeroIngresado = Number(prompt('Por favor ingrese un número, para mostrarle la tabla del número del 1 al 10: '));
for (i=0; i<=10; i++) {
    let resultado = numeroIngresado * i;
    console.log(`${numeroIngresado} x ${i} = ${resultado}`);
}*/
/*
// Ejercicio 9: Crear y mostrar una lista de compras utilizando un arreglo.
var listaDeCompras = [];
for (i=0; i<3; i++) {
    listaDeCompras[i] = []; 
    for (j=0; j<3; j++) {
        let producto = prompt('Por favor ingrese un producto para su lista de compras: ');
        listaDeCompras[i][j] = `${producto}`;
    }   
}
console.log(listaDeCompras);
*/
/*
// Ejercicio 10: Manejo de arreglos y sus métodos
let toDoList = ["Sacar a pasear al perro", "Cocinar", "Practicar programacion", "Comer", "Despejarse"];
console.info(toDoList);
console.info(toDoList.indexOf("Despejarse"));
toDoList.splice(4,5);
console.info(toDoList);
toDoList.push("Dormir");
console.info(toDoList);
*/
/*
// Ejercicio 11: Calcular la suma y el promedio de edades ingresadas por el usuario.
let numEdades = parseInt(prompt("Por favor ingrese el número de edades que va a ingresar: "));
var sumaEdades = 0;
let edades = [];
for (let i = 0; i < numEdades; i++) {
    edades[i] = parseInt(prompt(`Por favor ingrese la edad número ${i + 1}: `));
    sumaEdades += edades[i];
}   
console.info("Las edades ingresadas son:", edades);
console.info("La suma de las edades es:", sumaEdades);
console.info("El promedio de las edades es:", (sumaEdades/numEdades).toFixed(2));
console.info("La edad mayor es:", Math.max(edades));
console.info("La edad menor es:", Math.min(edades)); 
console.info("El número de edades ingresadas es:", edades.length);
*/
/*
let nombres = ["Analia", "Carlos", "Andres", "Agustin", "Mateo", "Ana"];
console.log(nombres);
let nombreLargo = "";
let nombreCorto = nombres[0];
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].length >= nombreLargo.length) {
        nombreLargo = nombres[i];
    }
    if (nombres[i].length <= nombreLargo.length) {
        nombreCorto = nombres[i];
    }    
}
console.log(`El nombre más largo de la lista es: ${nombreLargo}`);
console.log(`El nombre más corto de la lista es: ${nombreCorto}`);
*/
/*
// Ejercicio 12: Funciones de saludo y despedida
saludo = () => alert("Bienvenid@ a la web!");
saludo();

function despedida() {
    alert("Gracias por visitar la web, vuelva pronto!");
}
despedida();
*/
/*
// Ejercicio 13: Función para calcular el mayor de dos números
function calculoMayor(num1, num2, num3) {
    if (num1 > num2) {
        return console.info(`${num1} es mayor que ${num2}.`);
    } else if (num1 < num2) {
        return console.info(`${num1} no es mayor a ${num2}, sino que es menor.`);
    } else {
        console.info(`${num1} no es mayor a ${num2}, son iguales.`);
    }
}
calculoMayor(5, 10, 15);
calculoMayor(10, 5);
calculoMayor(10, 10);
*/

function IterarArray(array) {
    for (let elementosArray of array) {
        console.info(elementosArray);
    }
}

IterarArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
IterarArray(["Hola", "Chau"]);
IterarArray(["JavaScript", "Python", "Java"]);