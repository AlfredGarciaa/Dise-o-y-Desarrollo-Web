/** CLASES */

// No funcional \\
//const nombre = 'Juan'
//const edad = 30

//const nombre2 = 'Pedro'
//const edad2 = 29

/** ESTRUCTURA DE UNA CLASE 
* Definicion
* Propiedades: La clase puede contener variables. Dentro de una clase se llama propiedades
* Constructor: es un metodo especial para inicializar un objeto creado a partir de una clase
* Metodo: La clase puede contener funciones. Dentro de una clase se llama metodo
*/

// PRIMERO DEBO DEFINIR LA CLASE
class Usuario {

  tipo = 'Usuario'
  constructor(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
    console.log('Nuevo usuario registrado !')
  }
  obtenerNombreCompleto() {
    console.log('Obteniendo datos...')
    return `Nombre: ${this.nombre}\nApellido: ${this.apellido}`
  }
}

const usuario = new Usuario('Juan Jose', 'Perez Lopez')
console.log(usuario)
const usuario2 = new Usuario('Alex', 'Siles')
console.log(usuario2.apellido)

console.log(usuario2.obtenerNombreCompleto())
















  