/** .elemento.innerHTML 
* Nota: nos permite cambiar el contenido HTML de un elemento 
*/

const primeraCaja = document.querySelector('.caja')
//console.log(primeraCaja)
//muestra solo el texto
//console.log(primeraCaja.innerHTML)

primeraCaja.innerHTML = '<h1><b>Hola, Mundo !</b></h1>'


/** .elemento.attribute 
* nos permite acceder y cambiar atributos del elemento 
*/


primeraCaja.setAttribute('class', 'caja activa')
primeraCaja.setAttribute('data-id', '1213-31221-11313')


/** .element.style.property 
* nos permite cambiar los estilos CSS de un elemento 
*/

const contenedor2Caja1 = document.querySelector('#contenedor2 .caja')
console.log(contenedor2Caja1)

contenedor2Caja1.style.background = '#000'
contenedor2Caja1.style.color = '#fff'
contenedor2Caja1.style.textTransform = 'upperCase'
