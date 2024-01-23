/** CICLO FOR */

console.log('1')
console.log('2')
console.log('3')

const nombres = ['Juan', 'Pedro', 'Rafael', 'Erika', 'Ana', 'Cesar', 'Sergio']
//Recorre toda la lista
nombres.forEach((nombres) => {
    console.log(nombres)
})

// Expresion 1: se ejecutara 1 sola vez antes de comenzar a repetir el bloque
// Expresion 2: una condicion, mientras se ejecuta el bloque de codigo
// Expresion 3: se ejecutara siempre que se ejecute el bloque de codigo

for (let numero = 0; numero <= 100; numero += 5) {
    console.log(numero);
}

for (let numero = 50; numero >= 1; numero -= 1) {
    console.log(numero);
}

for (let numero = 0; numero < nombres.length; numero++) {
    console.log(nombres[numero]);
}
