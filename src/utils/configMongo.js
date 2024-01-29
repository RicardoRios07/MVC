const mongoose = require('mongoose');
require('dotenv').config();

// Conexión a Base de datos
const uri = `mongodb://127.0.0.1:27017/MVC`;


mongoose
    .connect(uri)
    .then(() => console.log('Se estableció conexión con la base de datos'))
    .catch((e) => console.log('Error de conexión a la base de datos:', e));

exports.mongoose = mongoose;    