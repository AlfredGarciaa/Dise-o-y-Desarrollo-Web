/** OPERADORES LOGICOS
 * && AND
 * || OR
 * ! NOT
 */

const nombre = 'Juan'
const edad = 17
const tieneEntrada = false // true
const tienePermiso = false // true
const permitirAcceso = (edad >= 18 && tieneEntrada) || (tienePermiso && tieneEntrada)
console.log(!permitirAcceso ? 'Acceso permitido al concierto' : 'Acceso NO permitido al concierto');

const variable = false
//console.log(!variable)
