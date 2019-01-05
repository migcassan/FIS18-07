const mongoose = require('mongoose');

const presupuesto = mongoose.model('presupuesto');


module.exports.register = (req, res, next) => {
    var prep = new presupuesto();
    prep.nombre = req.body.nombre;
    prep.categoria = req.body.categoria;
    prep.cantidad = req.body.cantidad;
    prep.monto = req.body.monto;
    prep.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Error guarando record.']);
            else
                return next(err);
        }
    });
}


module.exports.getPresupusto = (req, res, next) =>{
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


