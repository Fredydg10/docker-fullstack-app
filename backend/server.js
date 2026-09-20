const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Permitir que otros contenedores (como el frontend) se conecten
app.use(cors());

// Crear una ruta simple
app.get('/api', (req, res) => {
  res.json({ message: '¡Backend funcionando desde Docker! ' });
});

// Escuchar en 0.0.0.0 es OBLIGATORIO para que Docker pueda acceder
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend corriendo en el puerto ${PORT}`);
});
