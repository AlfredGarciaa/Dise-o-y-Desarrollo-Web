// LINk de pagina oficial de guia para los ejercicios realizados en el HTML \\

/** EJERCICIO 1 */
// Modificando elementos

// Obtener un elemento existente por su ID
var elementoParaModificar = document.getElementById('miElemento');
elementoParaModificar.innerHTML = '¡Este texto fue modificado!';
// Cambiar el estilo del elemento
elementoParaModificar.style.color = 'red';
console.log('Ejemplo 1:', elementoParaModificar);


/** EJERCICIO 2 */
// Creando y agregando nodos

var nuevoParrafo = document.createElement('p');
// Crear un nodo de texto
var textoNuevoParrafo = document.createTextNode('Este es un nuevo párrafo.');
nuevoParrafo.appendChild(textoNuevoParrafo);
// Obtener el elemento padre al cual agregaremos el nuevo elemento
var contenedor = document.getElementById('contenedor');
contenedor.appendChild(nuevoParrafo);
// Mostrar en la consola el resultado
console.log('Ejemplo 2:', contenedor);


/** EJERCICIO 3 */
// Crear y reemplazar elementos

var nuevoEncabezado = document.createElement('h2');
// Crear un nodo de texto
var textoNuevoEncabezado = document.createTextNode('Nuevo Encabezado');
nuevoEncabezado.appendChild(textoNuevoEncabezado);
// Obtener el elemento existente que será reemplazado
var encabezadoExistente = document.getElementById('viejoEncabezado');
var padre = encabezadoExistente.parentNode;
// Reemplazar el elemento existente con el nuevo elemento
padre.replaceChild(nuevoEncabezado, encabezadoExistente);
console.log('Ejemplo 3:', padre);
