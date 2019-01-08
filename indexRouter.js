const express = require('express');
const router = express.Router();
const jwtHelper = require('./jwtHelper');

const ctrlUser = require('./userCtrl');
const ctrlpresupuesto = require('./presupuestoCtrl');

router.post('/registerUser', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);

router.post('/presupuesto', jwtHelper.verifyJwtToken, ctrlpresupuesto.crear);
router.get('/presupuesto', jwtHelper.verifyJwtToken, ctrlpresupuesto.leer);
// router.put('/presupuesto/:name', /* jwtHelper.verifyJwtToken, */ ctrlpresupuesto.actualizar);
// router.delete('/presupuesto/:name', /* jwtHelper.verifyJwtToken, */ ctrlpresupuesto.borrar);

module.exports = router;