/** EJERCICIO 1 */
// Calculo de Factorial \\
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}

// Explicacion: utilizo recursividad para calcular el factorial de un número.
let numeroFactorial = 5;
let resultadoFactorial = calcularFactorial(numeroFactorial);
console.log("El factorial de " + numeroFactorial + " es: " + resultadoFactorial);


/** EJERCICIO 2 */
// Validación de Palíndromos \\
function esPalindromo(palabra) {
    let palabraSinEspacios = palabra.replace(/\s/g, "").toLowerCase();
    return palabraSinEspacios === palabraSinEspacios.split("").reverse().join("");
}

// Explicacion: verifico si una palabra es un palíndromo, si se lee igual de izquierda a derecha que de derecha a izquierda.
let palabraEvaluada = "reconocer";
let resultadoPalindromo = esPalindromo(palabraEvaluada);
console.log("¿" + palabraEvaluada + " es un palíndromo? " + resultadoPalindromo);


/** EJERCICIO 3 */
// Generación de Números Primos \\
// Definición de la función para generar los primeros n números primos
function generarNumerosPrimos(n) {
    let numerosPrimos = [];
    let candidato = 2;
    while (numerosPrimos.length < n) {
        if (esPrimo(candidato)) {
            numerosPrimos.push(candidato);
        }
        candidato++;
    }
    return numerosPrimos;
}
function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero > 1;
}

// Explicacion: genero los primeros n números primos utilizando una función auxiliar para verificar si un número es primo.
let cantidadPrimos = 5;
let primosGenerados = generarNumerosPrimos(cantidadPrimos);
console.log("Los primeros " + cantidadPrimos + " números primos son: " + primosGenerados.join(", "));
