const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');

router.post('/nuevoMedico', medicoController.nuevoMedico);

router.get ('/getMedicos', medicoController.getMedicos);

router.get ('/getMedico', medicoController.getMedico);

router.post ('/updateMedico', medicoController.updateMedico);

router.post ('/deleteMedico', medicoController.deleteMedico);

module.exports = router;
