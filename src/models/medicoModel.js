/**
 * @swagger
 * components:
 *   schemas:
 *      Medico:
 *       type: object
 *       required:
 *         - codigo
 *         - nombre
 *         - especialidad
 *         - anio
 *         - graduacion
 *         - consultorio
 *       properties:
 *         codigo:
 *           type: string
 *           description: Codigo del medico
 *         nombre:
 *           type: string
 *           description: Dirección de correo electrónico del administrador. Debe ser única.
 *         especialidad: 
 *           type: string
 *           description: Especialidad del medico
 *         anio:
 *           type: string
 *           description: Año de nacimiento del medico
 *         graduacion:
 *           type: string
 *           description: Fecha de graduacion del medico
 *         consultorio:
 *           type: string
 *           description: Consultorio del medico
 *       example:
 *        codigo: 1
 *        nombre: Juan
 *        especialidad: Cirujano
 *        anio: 1990
 *        graduacion: 2015-06-01
 *        consultorio: CALLE 66-30
 */

const mongoose = require('mongoose');

const medicoSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true,
        length: 3,
    },
    nombre: {
        type: String,
        required: true,
        unique: false,
    },
    especialidad: {
        type: String,
        required: true,
        unique: false,
    },
    anio: {
        type: String,
        required: true
    },
    graduacion: {
        type: Date,
        required: true
    },
    consultorio: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Medico', medicoSchema);
