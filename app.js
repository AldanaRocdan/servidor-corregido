const express = require('express');
const mysql = require('mysql');
const app = express();

const port = 3000; // Puerto del servidor

// Conexión a la base de datos
const connection = mysql.createConnection({
  host: 'vps-1743404-x.dattaweb.com',
  port: '3306', // Cambié al puerto 3306, el estándar para MySQL
  user: 'bolso', // (verificado en el string)
  password: 'eVSQS6MhjphBDdhI', // Contraseña corregida
  database: 'baggio',
});

// Conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos');
});

// Ruta API para obtener los pedidos
app.get('/api/pedidos', (req, res) => {
  connection.query('SELECT * FROM pedidos', (error, resultados) => {
    if (error) {
      console.error('Error en la consulta:', error.stack);
      res.status(500).send('Error en la consulta');
      return;
    }
    res.json(resultados);
  });
});

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Iniciar el servidor
app.listen(port, () => {
  console.log(Servidor corriendo en http://localhost:${port});
});