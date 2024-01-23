/** EJEMPLOS DE HERENCIA */

// Ejemplo 1 \\
class Vehiculo {
    constructor(marca) {
        this.marca = marca;
    }
    conducir() {
        console.log(`Conduciendo un ${this.marca}`);
    }
}
class Coche extends Vehiculo {
    constructor(marca, modelo) {
        super(marca);
        this.modelo = modelo;
    }
    acelerar() {
        console.log('Acelerando...');
    }
}
const miVehiculo = new Vehiculo('Vehículo');
const miCoche = new Coche('Toyota', 'Corolla');
miVehiculo.conducir();   // Salida: Conduciendo un Vehículo
miCoche.conducir();      // Salida: Conduciendo un Toyota
miCoche.acelerar();      // Salida: Acelerando...


// Ejemplo 2 \\
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}
class Gato extends Animal {
    constructor(nombre, color) {
        super(nombre);
        this.color = color;
    }
    maullar() {
        console.log(`Gato color ${this.color} ... ¡Miau!`);
    }
}
const miAnimal = new Animal('Animal');
const miGato = new Gato('Tom', 'Gris');
miGato.saludar();    // Salida: Hola, soy Tom
miGato.maullar();    // Salida: Gato color Gris ... ¡Miau!



/** EVENTOS */

// Ejemplo 1 \\
document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    console.log(`Nombre: ${nombre}\nEmail: ${email}`);
});
