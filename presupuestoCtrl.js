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
        console.log(Date() + " - POST /presupuestos" + JSON.stringify(req.body));
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

module.exports.actualizar = (req, res, next) => {
    var name = req.params.name;
    var updatedPresupuesto = req.body;
    console.log(updatedPresupuesto);
    console.log(Date() + " - PUT /presupuesto/" + name);

    presupuesto.replaceOne({ "name": name },
        updatedPresupuesto,
        (err, updateResult) => {
            if (err) {
                console.error("Error accesing DB");
                res.sendStatus(500);
            } else {
                if (updateResult.n > 1) {
                    console.warn("Incosistent DB: duplicated name");
                } else if (updateResult.n == 0) {
                    console.log(JSON.stringify(updateResult));

                    res.sendStatus(404);
                } else {
                    res.sendStatus(200);
                }
            }
        });

};

module.exports.borrar = (req, res, next) => {
    // Delete a single presupuesto
    var name = req.params.name;
    console.log(Date() + " - DELETE /presupuesto/" + name);

    presupuesto.deleteMany({ "name": name }, (err, removeResult) => {
        if (err) {
            console.error("Error accesing DB");
            res.sendStatus(500);
        } else {
            if (removeResult.n > 1) {
                console.warn("Incosistent DB: duplicated name");
            } else if (removeResult.n == 0) {
                res.sendStatus(404);
            } else {
                res.sendStatus(200);
            }
        }
    });
};
