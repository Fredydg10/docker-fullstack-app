const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Configuración de la Base de Datos (¡Nota el host: 'db'!)
const pool = new Pool({
  user: process.env.POSTGRES_USER || 'fredy',
  host: process.env.POSTGRES_HOST || 'db', // 'db' es el nombre del servicio en docker-compose
  database: process.env.POSTGRES_DB || 'miapp',
  password: process.env.POSTGRES_PASSWORD || 'secreto123',
  port: 5432,
});

// Ruta principal
app.get('/api', async (req, res) => {
  try {
    // Probamos la conexión a la base de datos
    await pool.query('SELECT NOW()');
    res.json({ 
      message: '¡Backend y Base de Datos conectados exitosamente desde Docker! 🐳🐘',
      db_status: 'ONLINE'
    });
  } catch (err) {
    res.status(500).json({ message: 'Error conectando a la BD', error: err.message });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(` Backend corriendo en el puerto ${PORT}`);
  console.log(` Conectando a Base de Datos en: ${process.env.POSTGRES_HOST || 'db'}`);
});
