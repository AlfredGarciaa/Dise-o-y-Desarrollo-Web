const eliminarCaja = () => {
    const contenedor = document.getElementById('contenedor1');

    if (contenedor) {
        const cajaEliminar = contenedor.querySelector('.caja');

        if (cajaEliminar) {
            contenedor.removeChild(cajaEliminar);
        } else {
            console.log('La caja no existe en el contenedor.');
        }
    } else {
        console.log('El contenedor no existe.');
    }
}










