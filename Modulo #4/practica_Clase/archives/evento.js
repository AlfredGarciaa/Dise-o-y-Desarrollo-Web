/** EVENTOS */

const boton1 = document.getElementById('boton1')
const primeraCaja = document.querySelector('.caja')
//console.log(boton1)

boton1.addEventListener('click', () => {
    primeraCaja.classList.toggle('activa')
    console.log('Intentos:', boton1.innerText);
    //console.log('Intentos:', primeraCaja.innerText);
})
