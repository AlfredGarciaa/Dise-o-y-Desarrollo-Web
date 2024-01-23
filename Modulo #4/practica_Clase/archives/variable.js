// NO muy utilizado \\
var edad = 30
//console.log(edad)

var _edad = 30
//console.log(_edad)

var $edad = 30
//console.log($edad)

/*
Tipos de datos que podemos guardar en variables
- String -> cadenas de texto
- Number -> Numeros (enteros, decimales)
- Boolean -> Boleanos (verdadero o falso)
- Object -> Objeto (conjunto de valores que vamos a poder agrupar)
- Function -> Funciones (son bloques de codigo que vamos a poder repetir para reutilizar codigo y hacer cosas dinamicas)
- Null -> Valor nulo (le asignamos cuando quieres valor vacio o 0)
- Undefined -> Valor sin definir
*/

var ejemplo
//console.log(ejemplo)

// SI puede cambiar globalmente \\
let nombre = 'Pedro'
nombre = 'Juan'
//console.log(nombre)

// NO puede cambiar globalmente \\
const correo = 'correo@correo.com'
//correo = 'corre2@correo2.com'
//console.log(correo)

// Muestra en una sola linea en la consola \\
let telefono = 123456789, pais = 'Bolivia', id = "1"
//console.log(telefono, pais, id)

const resultado = 110 + 210
//console.log(resultado)

// Concatenacion de cadenas \\
const nombre2 = 'Pedro', apellido2 = 'Perez'
const nombreCompleto = nombre2 + ' ' + apellido2
//console.log(nombreCompleto)

const nombre3 = 'Alfred', apellido3 = 'Garcia', carrera = 'Ing. de Sistemas', año = '2024'
const datosPerfil = nombre3 + ' ' + apellido3 + ' ' + carrera + ' ' + año
//console.log(datosPerfil)

let miVariable = 'texto'
miVariable = 7
console.log(miVariable)
