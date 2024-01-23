const agregarCaja = () => {
    //Paso 1: crear el elemento
    //createElement - Recibe como parametro una cadena de texto
    //con la etiqueta que queremos crear

    const nuevaCaja = document.createElement('div')

    // Paso 2: agregar texto y atributos
    //si va tener atributos un id o una clase

    nuevaCaja.innerHTML = 'Nueva Caja'
    nuevaCaja.setAttribute('id', 'nuevo-id')
    nuevaCaja.setAttribute('class', 'caja activa')

    // Paso 3: agregar el elemento en el DOM

    const contenedor = document.getElementById('contenedor1')

    /**
     * agregue las cajas al inicio y no al final, y para esto se debe utilziar
     * insertBefore que recibe 2 parametros, uno es el elemento que se va a 
     * otro es el punto de referencia, en este caso se va a obtener el primer 
     * contenedor y luego se utilizara para la funcion insertBefore
     */

    const primerHijo = contenedor.firstChild
    contenedor.insertBefore(nuevaCaja, primerHijo)
}
