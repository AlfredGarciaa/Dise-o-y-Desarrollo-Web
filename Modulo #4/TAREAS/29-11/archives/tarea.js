// LINk de pagina oficial de guia para los ejercicios realizados en el HTML \\


/** EJERCICIO 1 */
// Eliminando un Elemento del DOM

// Eliminar el elemento con id "paraEliminar"
var elementoEliminar = document.getElementById("paraEliminar");
if (elementoEliminar) {
    elementoEliminar.parentNode.removeChild(elementoEliminar);
    console.log("Elemento eliminado del DOM");
} else {
    console.log("No se encontró el elemento para eliminar");
}


/** EJERCICIO 2 */
// Modificando el Tamaño de Fuente de un Elemento

// Modificar el tamaño de fuente del elemento con id "elementoEstilo"
var elementoEstilo = document.getElementById("elementoEstilo");
if (elementoEstilo) {
    elementoEstilo.style.fontSize = "30px";
    console.log("Estilo del elemento modificado");
} else {
    console.log("No se encontró el elemento para modificar el estilo");
}


/** EJERCICIO 3 */
// Crear y reemplazar elementos

function cambiarColorFondo() {
    var elementoCambioColor = document.querySelector(".elementoCambioColor");
    if (elementoCambioColor) {
        elementoCambioColor.style.backgroundColor = "lightcoral";
        console.log("Color de fondo cambiado al hacer clic");
    } else {
        console.log("No se encontró el elemento para cambiar el color de fondo");
    }
}
