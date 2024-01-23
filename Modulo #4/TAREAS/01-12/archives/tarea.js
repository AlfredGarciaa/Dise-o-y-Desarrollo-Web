// LINk de pagina oficial de guia para los ejercicios realizados en el HTML \\


/** EJERCICIO 1 */
//Declaración de variables con let y const

let mensaje = "Hola, ";
const nombre = "María";
//Intento de reasignación a una constante (esto dará un error)
//nombre = "Pedro";
//Uso de template string
let saludo = `${mensaje}${nombre}! Bienvenida.`;

// Resultado: Hola, María! Bienvenida.
console.log(saludo, '\n\n');


/** EJERCICIO 2 */
//Template String con Variables y Función de Tipo Flecha

let producto = "Laptop";
const precio = 1200;
// Template string y función de tipo flecha
let describirProducto = (producto, precio) => {
  return `El ${producto} tiene un precio de $${precio}.`;
};

// Resultado: El Laptop tiene un precio de $1200.
console.log(describirProducto(producto, precio), '\n\n');


/** EJERCICIO 3 */
//Uso de Funciones de Tipo Flecha y Template String

// Función de tipo flecha para sumar dos números
let sumar = (a, b) => a + b;
let num1 = 10;
let num2 = 5;

// Resultado: La suma de 10 y 5 es 15.
console.log(`La suma de ${num1} y ${num2} es ${sumar(num1, num2)}.`);
