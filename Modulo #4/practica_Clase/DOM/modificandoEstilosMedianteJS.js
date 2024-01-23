const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
//console.log(ultimaCaja);
ultimaCaja.style.background = '#000';
ultimaCaja.style.color = '#fff';

const cajas = document.querySelectorAll('.caja');
console.log(cajas);

const incrementarFuente = () => {
    let tamanio = 24;
    cajas.forEach((Element) => {
        tamanio++;
        Element.style.fontSize = `${tamanio}px`;
    });
};

const disminuirFuente = () => {
    let tamanio2 = 24;
    cajas.forEach((Element) => {
        tamanio2--;
        Element.style.fontSize = `${tamanio2}px`;
    });
};

