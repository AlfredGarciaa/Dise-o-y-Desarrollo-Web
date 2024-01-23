/** Caracteristica #1 */

//var nombre = 'Jose'
//var nombre = 'Rafael'
//console.log('Hola ' + nombre)

//const pais = 'Bolivia'
//const pais = 'Ecuador'
//console.log('Hola ' + pais)


/** Caracteristica #2 */

function saludo() {
    const nombre = 'Pedro'
    return 'Hola ' + nombre 
}
//console.log(saludo())
/*No se puede acceder a las variables internas*/
//console.log(nombre)


/** Caracteristica #3 */

const edad = 18

if(edad >= 18) {
    const esAdulto = true
    /*Con 'LET' y 'CONST' la variable esta protegida dentro el bloque*/
    /*Con 'VAR' no esta protegido, es general*/
    //console.log(esAdulto)
}
//console.log(esAdulto)


/** Caracteristica #4 */

//Const -> es constante no cambia la variable
//Let -> sobreescribe la variable !

//const nombre = 'Jose'
//nombre = 'Rafael'
//console.log(nombre)

const colores = ['rojo', 'amarrillo']
//colores = 'dasdasd'
colores.push('verde')
console.log(colores)

/*Casi 'VAR' no se utiliza actualmente*/
