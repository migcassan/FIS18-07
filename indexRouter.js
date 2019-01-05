const express = require('express');
const router = express.Router();

const ctrlUser = require('./userCtrl');
// const ctrlpresupuesto = require('./presupuestoCtrl');

const jwtHelper = require('./jwtHelper');

router.post('/registerUser', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
// router.post('/register', ctrlpresupuesto.register);

// router.get('/presupuesto', jwtHelper.verifyJwtToken, ctrlpresupuesto.getPresupuesto);
module.exports = router;