        // EJEMPLOS STRING
let saludo = "¡Hola, mundo!";
let despedida = "Hasta luego";
// Imprimirá: ¡Hola, mundo!
console.log(saludo); 
// Imprimirá la longitud de la cadena: 11
console.log(despedida.length);


        // EJEMPLOS NUMBER
let numeroEntero = 42;
let numeroDecimal = 3.14;
// Imprimirá el doble del número: 84
console.log(numeroEntero * 2); 
// Imprimirá la parte entera: 3
console.log(Math.floor(numeroDecimal)); 


        // EJEMPLOS BOOLEAN
let esVerdadero = true;
let esFalso = false;
// Imprimirá: true
console.log(esVerdadero); 
// Imprimirá: true (negación de false)
console.log(!esFalso); 


        // EJEMPLOS OBJECT
let persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Ejemploville"
};
let libro = {
    titulo: "Aventuras Fantásticas",
    autor: "Carlos Escritor",
    paginas: 200
};
// Imprimirá la edad: 30
console.log(persona.edad);
// Imprimirá el título del libro: Aventuras Fantásticas
console.log(libro.titulo); 
  

        // EJEMPLOS FUNCTION
function sumarNumeros(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "¡Hola, " + nombre + "!";
}
// Imprimirá la suma: 8
console.log(sumarNumeros(3, 5)); 
// Imprimirá: ¡Hola, Juan!
console.log(saludar("Juan")); 
  

        // EJEMPLOS NULL
let valorNulo1 = null;
let valorNulo2 = null;
// Imprimirá: null
console.log(valorNulo1); 
// Imprimirá: object (null se clasifica como objeto)
console.log(typeof valorNulo2); 

        // EJEMPLOS UNDEFINED
let valorIndefinido1;
let valorIndefinido2;
// Imprimirá: undefined
console.log(valorIndefinido1);
// Imprimirá: undefined (tipo de dato)
console.log(typeof valorIndefinido2); 
