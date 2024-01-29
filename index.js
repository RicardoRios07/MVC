const express = require('express');
const connMongo = require('./src/utils/configMongo');
const morgan = require('morgan');
require('dotenv').config();
const app = express();
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const medicoRoutes = require('./src/Routes/routes');

connMongo.mongoose;

const corsOptions = {
    origin: '*',
    allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', medicoRoutes);

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API para Patrón MVC',
            version: '1.0.0',
            description: 'Documentación de la API para Patrón MVC',
        },
        servers: [
            {
                url: `http://localhost:3000}`,
            },
        ],
    },
    apis: ['./src/controller/medicoController/*.js', './src/models/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto: ${PORT}`);
});
