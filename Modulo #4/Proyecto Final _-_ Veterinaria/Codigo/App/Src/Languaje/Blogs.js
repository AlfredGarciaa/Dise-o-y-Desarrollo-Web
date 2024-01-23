document.addEventListener('DOMContentLoaded', () => {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const showAdoptionMessage = async () => {
        console.log('Proceso de adopción iniciado...');

        // Esperar un pequeño período de tiempo para permitir que la consola se actualice
        await sleep(0);

        await sleep(2000);
    };

    const handleAdoptionClick = async () => {
        await showAdoptionMessage();
    };

    const adoptButton = document.getElementById('adoptButton');
    adoptButton.addEventListener('click', handleAdoptionClick);
});
