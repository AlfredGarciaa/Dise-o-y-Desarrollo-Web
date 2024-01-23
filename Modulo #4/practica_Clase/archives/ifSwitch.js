const usuario = {
    nombre: 'Pedro',
    pais: 'Argentina'
}

/*
if (usuario.pais === 'Bolivia') {
    console.log('El usuario es Boliviano')
} else if (usuario.pais === 'Ecuador') {
    console.log('El usuario es Ecuatoriano')
} else {
    console.log('El usuario es de otro pais')
}
*/

// Switch
switch(usuario.pais) {
    case 'Bolivia':
        console.log('El usuario es Boliviano')
        break
    case 'Ecuador':
        console.log('El usuario es Ecuatoriano');
        break
    case 'Argentina':
        console.log(`El usuario es Argentino`);
        break
    default:
        console.log('El usuario es de otro pais')
}






