const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const neo4jDriver = require('./config/db');
const redisClient = require('./config/redis');
const cache = require('./middlewares/cache/logger');
const listRoutes = require('./routes/listRoutes');
const modRoutes = require('./routes/modRoutes');

const PORT = 3000;

app.use((req, res, next) => cache(req, res, next, redisClient));
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.use('/api', listRoutes);
app.use('/api', modRoutes);


process.on('SIGINT', async () => {
    console.log('Cerrando conexión con Redis...');
    await redisClient.disconnect();
    console.log('Conexión con Redis cerrada');
    neo4jDriver.close();
    console.log('Conexión con Neo4J cerrada');
    process.exit(0); // Finaliza el proceso
});

app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto 3000 \r\n http://localhost:' + PORT)
});