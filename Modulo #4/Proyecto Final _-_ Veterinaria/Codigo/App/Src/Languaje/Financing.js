document.addEventListener('DOMContentLoaded', () => {
    const financingLink = document.querySelector('.button-bar a[href="/Src/Views/Financing.html"]');
    financingLink.addEventListener('click', async (event) => {
        event.preventDefault();
        console.log('¡Has hecho clic en el enlace de Financiamiento!');
        await sleep(5000);

        // Puedes redirigir a la página de financiamiento si es necesario
        window.location.href = '/Src/Views/Financing.html';
    });

    const homeLink = document.querySelector('.error-link');
    homeLink.addEventListener('click', async (event) => {
        event.preventDefault();
        console.log('¡Has hecho clic en el enlace para volver al Home!');
        await sleep(5000);

        // Puedes redirigir a la página de inicio si es necesario
        window.location.href = '/Src/Views/Home.html';
    });

    // Función de "sleep" utilizando promesas
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
});
