// Clase base para manipulación del DOM
class DOMManipulator {
    constructor() {
      // Obtener el body del documento
      this.body = document.body;
    }
  
    // Crear un elemento y añadirlo al DOM
    createElement(tag, attributes, text) {
      const element = document.createElement(tag);
  
      // Añadir atributos si existen
      if (attributes) {
        for (const key in attributes) {
          element.setAttribute(key, attributes[key]);
        }
      }
  
      // Añadir texto si existe
      if (text) {
        element.textContent = text;
      }
  
      return element;
    }
  
    // Añadir un elemento al DOM
    appendElement(parent, child) {
      parent.appendChild(child);
    }
  
    // Eliminar un elemento del DOM
    removeElement(element) {
      element.parentNode.removeChild(element);
    }
  
    // Modificar atributos de un elemento del DOM
    modifyAttributes(element, attributes) {
      for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
      }
    }
  }
  
  // Clase que hereda de DOMManipulator y extiende su funcionalidad
  class ExtendedDOMManipulator extends DOMManipulator {
    constructor() {
      super();
    }
  
    // Crear un botón con un evento de clic
    createButtonWithEvent(text, clickHandler) {
      const button = this.createElement('button', null, text);
      button.addEventListener('click', clickHandler);
      return button;
    }
  }
  
  // Instanciar la clase extendida
  const domManipulator = new ExtendedDOMManipulator();
  
  // Ejemplo de uso: Crear un botón y añadirlo al body
  const myButton = domManipulator.createButtonWithEvent('Haz clic', () => {
    console.log('Botón clickeado');
  });
  
  domManipulator.appendElement(domManipulator.body, myButton);
  





// FORMULARIO \\
const form = document.getElementById('myForm');

const handleSubmit = (event) => {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const mensaje = document.getElementById('mensaje').value;

  if (!nombre || !correo || !mensaje) {
    console.error('Todos los campos son obligatorios');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo)) {
    console.error('Formato de correo electrónico no válido');
    return;
  }

  const formData = {
    nombre,
    correo,
    mensaje
  };

  console.log('Formulario enviado:', formData);

};

form.addEventListener('submit', handleSubmit);


