document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('usuario');
    const passwordInput = document.getElementById('contraseña');
    const loginButton = document.getElementById('loginButton');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
            console.log('Por favor, completa ambos campos.');
        } else {
            console.log(`Inicio de sesión exitoso para el usuario: ${usernameInput.value}`);
            await sleep(5000);

            // Puedes redirigir a la página de inicio si es necesario
            window.location.href = '/Src/Views/Home.html';
        }
    });

    // Función de "sleep" utilizando promesas
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
});





// FORM \\
const loginForm = document.getElementById('loginForm');

const validateForm = () => {
  const usuario = document.getElementById('usuario').value;
  const contraseña = document.getElementById('contraseña').value;

  if (!usuario || !contraseña) {
    alert('Por favor, completa todos los campos.');
  } else {
    alert('Formulario enviado. Acceso permitido.');
    // Redirige a la página deseada
    window.location.href = '/Src/Views/Home.html';
  }
};

document.getElementById('loginButton').addEventListener('click', validateForm);