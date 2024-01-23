class SplashPage {
    constructor() {
        this.startTimer();
        this.setupEventListeners();
    }

    startTimer = async () => {
        await this.sleep(3000); // Simula un "sueño" de 3 segundos
        console.log("Esperando 3 segundos...");
        this.redirectToAuthPage();
    };

    redirectToAuthPage = () => {
        window.location.href = "./Src/Views/Auth.html";
    };

    setupEventListeners = () => {
        const goToHomeButton = document.getElementById('go-to-home-button');
        goToHomeButton.addEventListener('click', () => {
            console.log("Botón 'Vamos' clicado");
            this.redirectToAuthPage();
        });
    };

    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
}

// Crear una instancia de la clase SplashPage al cargar la página
window.addEventListener('load', () => {
    new SplashPage();
});