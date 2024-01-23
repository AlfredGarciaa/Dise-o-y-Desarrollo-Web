const primeraCaja = document.querySelector('#contenedor1 .caja') 
console.log(primeraCaja)
console.log(primeraCaja.classList)

const agregarClase = () => {
    const nuevaCaja = document.createElement('div');

    nuevaCaja.innerHTML = 'Nueva Caja'
    nuevaCaja.setAttribute('class', 'caja activa')
    nuevaCaja.style.background = '#000'

    const contenedor = document.getElementById('contenedor1')
    contenedor.appendChild(nuevaCaja)
};
