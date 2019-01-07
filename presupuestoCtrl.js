const mongoose = require('mongoose');
const presupuesto = mongoose.model('presupuesto');

// Crear, Leer, Actualizar y Borra
module.exports.crear = (req, res, next) => {
    var prep = new presupuesto();

    prep.name = req.body.name;
    prep.category = req.body.category;
    prep.quantity = req.body.quantity;
    prep.amount = req.body.amount;
    prep.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code === 11000) {
                res.status(422).send(['Presupuesto Duplicado']);
            }
            else {
                return next(err);
            }
        }
        console.log(Date() + " - POST /presupuestos" + req.body);
    });
}


module.exports.leer = (req, res, next) => {
    presupuesto.find((err, presupuestos) => {
        if (err) {
            console.error("Error mostrando record");
            res.sendStatus(500);
        } else {
            res.send(presupuestos.map((presupuestos) => {
                return presupuestos.cleanup();
            }));
        }
    });
}