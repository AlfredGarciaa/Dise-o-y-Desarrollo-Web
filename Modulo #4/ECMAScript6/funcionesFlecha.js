const nombres = ['Jose', 'Pedro', 'Rafael', 'Ricardo'];

const numero_caracteres = nombres.map(function(nombre) {
    //console.log(`${nombre} tiene ${nombre.length} letras`);
});

const numero_caracteres2 = nombres.map(nombre => `${nombre} tiene ${nombre.length} caracteres`)
console.log(numero_caracteres2);
