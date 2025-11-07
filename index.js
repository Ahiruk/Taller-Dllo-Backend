const express = require('express');
const app = express();

app.use(express.json());

const rutaT1 = require('./Rutas/ruta_t1');
const rutaT2 = require('./Rutas/ruta_t2');
const rutaT3 = require('./Rutas/ruta_t3');  

app.use('/taller1', rutaT1);
app.use('/taller2', rutaT2);
app.use('/taller3', rutaT3);


app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente ');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});