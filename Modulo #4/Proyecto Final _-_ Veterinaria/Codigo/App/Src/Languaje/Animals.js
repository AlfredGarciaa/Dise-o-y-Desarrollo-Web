class VeterinariaApp {
    constructor() {
        this.setupEventListeners();
    }

    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async showAdoptionMessage() {
        console.log('Proceso de adopción iniciado...');
        await this.sleep(5000);
        console.log('Proceso de adopción completado.');
    }

    async handleAdoptionClick() {
        await this.showAdoptionMessage();
    }

    setupEventListeners() {
        // Event listener para el botón de adopción
        const adoptButton = document.getElementById('adoptButton');
        adoptButton.addEventListener('click', () => this.handleAdoptionClick());
    }
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    const app = new VeterinariaApp();
});









// Tarjetitas \\
    function incrementarContador(cardId) {
        const contadorInput = document.getElementById(`contador${cardId}`);
        let contador = parseInt(contadorInput.value, 10);
        contador += 1;
        contadorInput.value = contador;
  
        // Guardar en localStorage
        localStorage.setItem(cardId, contador);
      }
  
      function decrementarContador(cardId) {
        const contadorInput = document.getElementById(`contador${cardId}`);
        let contador = parseInt(contadorInput.value, 10);
        if (contador > 0) {
          contador -= 1;
          contadorInput.value = contador;
  
          // Guardar en localStorage
          localStorage.setItem(cardId, contador);
        }
      }
  
      function mostrarComentarios(cardId) {
        const comentariosDiv = document.getElementById(`comentarios${cardId}`);
        comentariosDiv.style.display = 'block';
      }
  
      function enviarComentario(cardId) {
        const comentariosDiv = document.getElementById(`comentarios${cardId}`);
        const comentarioTextarea = comentariosDiv.querySelector('textarea');
        const comentario = comentarioTextarea.value;
  
        console.log(`Comentario para ${cardId}: ${comentario}`);
  
        localStorage.setItem(`comentario${cardId}`, comentario);
  
        comentariosDiv.style.display = 'none';
        comentarioTextarea.value = '';
      }

