const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

const puerto = 4000;
app.listen(puerto, () => {
  console.log(`La aplicación está escuchando en http://localhost:${puerto}`);
});
