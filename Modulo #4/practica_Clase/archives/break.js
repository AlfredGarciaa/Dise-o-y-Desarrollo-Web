/** BREAK */

const nombres = ['Juan', 'Javier', 'Joel', 'Erika', 'Jose', 'Jaime']
for(let i = 0; i < nombres.length; i++) {
    if(nombres[i][0] !== 'J') {
        console.log(nombres[i] + ', No empieza por la letra J')
        break
    }
    console.log(nombres[i])
}
