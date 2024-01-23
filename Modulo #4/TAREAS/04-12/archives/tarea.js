// LINk de pagina oficial de guia para los ejercicios realizados en el HTML \\


/** EJERCICIO 1 */
console.log('====== EJERCICIO 1 ======')
//Nueva forma para trabajar con Objetos

// Antes de ES6
var nombre = "John";
var edad = 30;
var persona = { nombre: nombre, edad: edad };
// En ES6
const nombre2 = "John";
const edad2 = 30;
const persona2 = { nombre2, edad2 };

// { nombre: 'John', edad: 30 }
console.log(persona); 


/** EJERCICIO 2 */
console.log('====== EJERCICIO 2 ======')
//Objeto "Map" y Objeto "Set"

// Uso de Map
let mapa = new Map();
mapa.set('clave1', 'valor1');
mapa.set('clave2', 'valor2');

 // valor1
console.log(mapa.get('clave1'));
// 2
console.log(mapa.size); 

// Uso de Set
let conjunto = new Set([1, 2, 3, 4, 5, 1, 2]);
// Set { 1, 2, 3, 4, 5 }
console.log(conjunto); 


/** EJERCICIO 3 */
console.log('====== EJERCICIO 3 ======')
//Manejo de las Promesas

// Promesa que simula una operación asíncrona
const obtenerDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulamos éxito
      const exito = true; 
      if (exito) {
        resolve('Datos obtenidos correctamente');
      } else {
        reject('Error al obtener datos');
      }
    }, 2000);
  });
};

// Utilización de la promesa
obtenerDatos()
  .then((resultado) => console.log(resultado))
  .catch((error) => console.error(error));


/** EJERCICIO 4 */
console.log('====== EJERCICIO 4 ======')
//Nuevos Métodos para Cadenas de Texto y Arreglos

// Nuevos Métodos para Cadenas de Texto
const mensaje = "Hola, cómo estás?";
 // true
console.log(mensaje.startsWith("Hola"));
 // true
console.log(mensaje.endsWith("?")); 
 // true
console.log(mensaje.includes("cómo"));

// Nuevos Métodos para Arreglos
const numeros = [1, 2, 3, 4, 5];
const duplicados = numeros.map(num => num * 2);
// [2, 4, 6, 8, 10]
console.log(duplicados); 
const suma = numeros.reduce((acc, num) => acc + num, 0);
// 15
console.log(suma); 
