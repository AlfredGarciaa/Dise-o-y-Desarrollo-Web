/** PARAMETROS Y ARGUMENTOS */

// Parametros: son los valores especificos en la definicion
// Argumentos: son los valores que le pasamos a la funcion cuando la invocamos

/*
const saludo = (nombre) => {
    console.log(`Hola ${nombre}`)
}
saludo('Cesar')
saludo('Ana')
saludo()
*/

// Multiples Parametros
 const operacion = (tipo, numero1, numero2) => {
    if(tipo === 'suma') {
        console.log(numero1 + numero2)
    } else if(tipo === 'resta') {
        console.log(numero1 - numero2)
    }
 }
operacion('suma', 2, 5)
operacion('resta', 100, 200)
