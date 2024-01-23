const express = require("express")
const cors = require('cors')

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const routerApi = require('./routes')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express()
const port = 3000


// Configuración de Passport
passport.use(new LocalStrategy(
    (username, password, done) => {
      const users = [
        { id: 1, username: 'user1', password: 'password1' },
        { id: 2, username: 'user2', password: 'password2' }
      ];
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Usuario o contraseña incorrectos' });
      }
    }
  ));
  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    const user = users.find(u => u.id === id);
    done(null, user);
  });
  
  // Configuración de express-session
  app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: false }));
  
  // Configuración de Passport
  app.use(passport.initialize());
  app.use(passport.session());


app.use(express.json())

/*
const whileList = ['http://localhost:8080', 'https://myapp.com', 'http://127.0.0.1:5500']
const options = {
    origin: (origin, callback) => {
        if(whileList.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('No es permitido'))
        }
    }
}

app.use(cors(options))
*/

app.get("/", (req, res) => {
    res.send("Mi Veterinaria en Express, Pagina Inicial !")
})

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
    console.log("\nAplicacion escuchando en el puerto: " + port)
})
