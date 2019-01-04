const express = require('express');
const router = express.Router();

const ctrlUser = require('./userCtrl');
// const ctrlpresupuesto = require('./presupuestoCtrl');

router.post('/register', ctrlUser.register);

// router.post('/register', ctrlpresupuesto.register);

module.exports = router;