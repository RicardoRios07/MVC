const Medico = require('../models/MedicoModel');

exports.nuevoMedico = async (req, res) => {
    try {
        const medico = new Medico(req.body);
        await medico.save();
        res.status(201).json({
            status: 'success',
            message: 'Médico registrado exitosamente.',
            data: { medico }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error al registrar el médico.',
            error: error.message
        });
    }
};

exports.getMedicos = async (req, res) => {
    try {
        const medicos = await Medico.find();
        res.status(200).json({
            status: 'success',
            message: 'Médicos obtenidos exitosamente.',
            data: { medicos }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error al obtener los médicos.',
            error: error.message
        });
    }
};

exports.getMedico = async (req, res) => {
    const id = req.body;
    try {
        const medico = await Medico.findById(id);
        if (!medico) {
            return res.status(404).json({
                status: 'error',
                message: 'Médico no encontrado.'
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'Médico obtenido exitosamente.',
            data: { medico }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error al obtener el médico.',
            error: error.message
        });
    }
};

exports.updateMedico = async (req, res) => {
    const id = req.body.id;
    try {
        const medico = await Medico.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });
        if (!medico) {
            return res.status(404).json({
                status: 'error',
                message: 'Médico no encontrado.'
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'Médico actualizado exitosamente.',
            data: { medico }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error al actualizar el médico.',
            error: error.message
        });
        console.log("Error durante la actualizacion",error);
    }
};

exports.deleteMedico = async (req, res) => {
    const id = req.body;
    try {
        const medico = await Medico.findByIdAndDelete(id);
        if (!medico) {
            return res.status(404).json({
                status: 'error',
                message: 'Médico no encontrado.'
            });
        }
        res.status(204).json({
            status: 'success',
            message: 'Médico eliminado exitosamente.'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error al eliminar el médico.',
            error: error.message
        });
    }
};
