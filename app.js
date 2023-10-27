const express = require('express');
const bodyParser = require('body-parser');
const proyectosRoutes = require('./routes/proyectosRoutes');
const donatariosRoutes = require('./routes/donatariosRoutes');
const personaRoutes = require('./routes/personaRoutes');
const donadoresRoutes = require('./routes/donadoresRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

//Rutas
app.use('/proyectos', proyectosRoutes);
app.use('/donatarios', donatariosRoutes);
app.use('/personas', personaRoutes);
app.use('/donadores', donadoresRoutes);

//Arrancar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});


