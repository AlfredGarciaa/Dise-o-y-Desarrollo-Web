/** HERENCIA */

class Usuario {
    constructor(usuario, password) {
        this.Usuario = usuario
        this.password = password
    }
    obtenerPost() {
        const posts = ['post1', 'post2']
        return posts
    }
}

class Moderador extends Usuario {
    constructor(usuario, password, permisos) {
        super(usuario, password)
        this.permisos = permisos
    }
}

const usuario = new Usuario('Pedro', '121')
console.log(usuario.obtenerPost())

const usuario2 = new Moderador('Cesar', '345', ['borrar', 'editar'])
console.log(usuario2.permisos)
