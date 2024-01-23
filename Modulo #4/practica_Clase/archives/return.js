/** SENTENCIA RETURN */

let resultado = 0
const operacion = (tipo, numero1, numero2) => {
    if(tipo === 'suma') {
        resultado = numero1 + numero2
    } else if(tipo === 'resta') {
        resultado = numero1 - numero2
    } else if(tipo === 'multiplicacion') {
        resultado = numero1 * numero2
    } else if(tipo === 'division') {
        resultado = numero1 / numero2
    }
    return resultado
 }

//operacion('suma', 2, 5)
//operacion('resta', 100, 200)
//operacion('multiplicacion', 50, 20) 
//operacion('division', 10, 20) 

const suma = operacion('suma', 2, 5)
console.log(suma)
const resta = operacion('resta', 100, 200)
console.log(resta)
const multiplicacion = operacion('multiplicacion', 50, 20)
console.log(multiplicacion)
const division = operacion('division', 10, 20)
console.log(division)
