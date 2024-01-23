/** CONTINUE */

const invitados = ['Juan', 'Pedro', 'Rafael', 'Erika', 'Ana', 'Cesar', 'Sergio']
console.log('Lista de personas aceptadas: ')

for(let i = 0; i < invitados.length; i++) {
    if(invitados[i] == 'Rafael') {
        continue
    }
    console.log(invitados[i])
}









