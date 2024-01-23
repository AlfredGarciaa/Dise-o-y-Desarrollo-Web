const nombre = 'Jose Miguel'
const edad = '30'
const pais = 'Bolivia'

/*Tedioso, se tarda*/
//const resultado = 'La persona es ' + nombre + ' con ' + edad + ' años de edad y es de ' + pais;

/*Mucho mejor con Templates*/
const resultado = `La persona es ${nombre}, tiene ${edad} años y es de ${pais}`
console.log(resultado);
