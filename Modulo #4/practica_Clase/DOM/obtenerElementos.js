/** getElementById
 * Nos permite obtener un elemento en base al atributo id
*/

const contenedor1 = document.getElementById('contenedor1')
console.log(contenedor1)

/** CHILDREN 
* Nos permite obtener los elementos hijo 
*/

console.log(contenedor1.children)

/** parentElement 
* Nos permite obtener el elemento padre de un elemento 
*/

console.log(contenedor1.parentElement)

/** 
 * getElementByTagName: Nos permite obtener una coleccion de elementos en base a las etiquetas
 * Nota: Devuelve una coleecion HTML, una coleccion NO es un arreglo
 */

const divs = document.getElementsByTagName('div')
console.log(divs)
console.log(`Tenemos ${divs.length} divs en la pagina`)

/** 
* getElementClassName: nos permite una coleccion en base a su clase CSS 
* Nota: devuelve una coleecion HTML
*/

const contenedores = document.getElementsByClassName('contenedor')
console.log(contenedores)

/** 
* querySelector: nos devuelve el primer elemento que coincida con el selector y estilo CSS
* Nota: devuelve un nodeList 
*/

const caja = document.querySelector('#contenedor1 .caja')
console.log(caja)

/** 
* querySelectorAll: nos permite obtener una coleccion de elementos en base a un selector y estilo CSS
* Nota: nos devuelve un nodeList 
*/

const cajas = document.querySelectorAll('#contenedor1 .caja')
console.log(cajas)

cajas.forEach((caja) => {
    console.log(caja)
})

/** closest 
* Nos va a permitir buscar desde adentro de un elemento hacia los elementos externos
*/

const ultimaCaja = document.querySelector('#contenedor1 .caja:last-child')
console.log(ultimaCaja)
//buscar de adentro hacia afuera hasta encontrar el contenedor principal
console.log(ultimaCaja.closest('.contenedor-principal'))


// Acceder al contenedor2
const contenedor2 = document.getElementById('contenedor2')
console.log(contenedor2)
