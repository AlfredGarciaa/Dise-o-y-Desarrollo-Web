const items = document.querySelectorAll('.itemCarrousel');
let currentItemIndex = 0;

// Función para cambiar el elemento del carrusel
const changeItem = (indexChange) => {
    currentItemIndex = (currentItemIndex + indexChange + items.length) % items.length;
    console.log(`Mostrando elemento ${currentItemIndex + 1}`);
    // Aquí puedes agregar lógica adicional si es necesario
};

// Puedes llamar a changeItem con el índice inicial si lo deseas
// changeItem(0);






// PERSONAL DE VETERINARIA \\
let idCounter = 1;

function agregarNuevaFila() {
  const tableBody = document.getElementById('tableBody');
  const primeraFilaExistente = tableBody.firstElementChild.cloneNode(true);

  idCounter++;

  primeraFilaExistente.querySelector('td:first-child').textContent = idCounter;

  tableBody.appendChild(primeraFilaExistente);

  console.log('Nueva fila:', primeraFilaExistente);
}