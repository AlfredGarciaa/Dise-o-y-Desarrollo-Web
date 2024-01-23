// Link de pagina oficial donde me oriente: https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction 

/** PRIMER EJERCICIO */
// Acceder al elemento por su ID y cambiar el texto
const miParrafo = document.getElementById("miParrafo");
miParrafo.textContent = "¡Hola, a todos !";

console.log("Nuevo texto del párrafo:", miParrafo.textContent);


/** SEGUNDO EJERCICIO */
// Acceder al elemento por su ID y cambia el estilo al pasar el ratón
const miBoton = document.getElementById("miBoton");
miBoton.addEventListener("mouseover", function() {
    miBoton.style.backgroundColor = "#e74c3c";

    console.log("Mouse sobre el botón");
});
miBoton.addEventListener("mouseout", function() {
    miBoton.style.backgroundColor = "#3498db";

    console.log("Mouse fuera del botón");
});


/** TERCER EJERCICIO */
function agregarTarea() {
    // Crear un nuevo elemento de lista
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = "Nueva tarea";
    // Agregar el nuevo elemento a la lista existente
    const miLista = document.getElementById("miLista");
    miLista.appendChild(nuevaTarea);

    console.log("Nueva tarea agregada: ", nuevaTarea.textContent);
}
