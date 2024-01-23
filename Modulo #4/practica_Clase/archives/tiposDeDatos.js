/*
Tipos de datos que podemos guardar en variables
- String -> cadenas de texto
- Number -> Numeros (enteros, decimales)
- Boolean -> Boleanos (verdadero o falso)
- Object -> Objeto (conjunto de valores que vamos a poder agrupar)
- Function -> Funciones (son bloques de codigo que vamos a poder repetir para reutilizar codigo y hacer cosas dinamicas)
- Null -> Valor nulo (le asignamos cuando quieres que una variable no tenga valor, quieres que sea un valor null)
- Undefined -> Valor sin definir
*/

// STRING - CADENAS DE TEXTO
const nombre = `PEDRO`
const parrafo = "Este es un parrafo"
const parrafo2 = 'Este es un "parrafo"'
//console.log(parrafo2)

const parrafo3 = 'Este es un \"Parrafo\"'
//console.log(parrafo3)

// NUMBER - NUMEROS
const numero = 4
const numero2 = 3.1416
const numero3 = -23
//console.log(numero + '\n' + numero2 + '\n' + numero3);

// BOOLEAN - BOOLEANO (TRUE O FALSE)
const usuarioConectado = false
//console.log(usuarioConectado)

const mayor = 20 > 10
//console.log(mayor)

// ARRAY - ARREGLOS
const arreglo = [1, 23, 12]
//console.log(arreglo)

const arreglo2 = ['texto', 4355, true, {clave: 'valor'}, [1, 2, 3]]
//console.log(arreglo2)

// OBJECT - OBJETO
//const persona = ['Carlos', 30, true]
const persona = {
    nombre: 'Carlos',
    edad: 30,
    carro: {
        marca: 'Toyota',
        color: 'Rojo',
    },
};
//console.log(persona.nombre)

// Practica = producto: categoria, precio, nutrientes (grasas, proteinas) que muestre en consola todos los datos.
const producto = {
    producto: 'Pan',
    categoria: 12,
    nutrientes: {
        grasas: null,
        proteinas: 'calcio, fosforo, lactosa',
    },
};
//console.log(producto)
// Solo que muestre proteinas
//console.log(producto.nutrientes.proteinas)

// FUNCTION - FUNCIONES
function Prender() {
    console.log('Prender')
}
Prender()

// NULL - NULO
const miVariable = null

// UNDEFINED - INDEFINIDOS
