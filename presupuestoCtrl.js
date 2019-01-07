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
            return next(err);
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

// module.exports.actualizar = async (req, res) => {
//     const { nombre } = req.params;

//     const prep = new presupuesto();

//     prep.categoria = req.body.categoria;
//     prep.cantidad = req.body.cantidad;
//     prep.monto = req.body.monto;
//     // prep.nombre = req.body.nombre;

//     await presupuesto.replaceOne(
//         { "nombre": nombre },
//         prep,
//         (err, updateResult) => {
//             if (err) {
//                 console.error("Error accesing DB");
//                 res.sendStatus(500);
//             } else {
//                 if (updateResult.n > 1) {
//                     console.warn("Incosistent DB: duplicated");
//                 } else if (updateResult.n == 0) {
//                     res.sendStatus(404);
//                 } else {
//                     res.sendStatus(200);
//                     res.json({ status: 'Actualización correcta' });
//                 }
//             }
//         });

// }

// module.exports.borrar = (req, res) => {
//     // Delete a single contact
//     var name = req.params.name;
//     console.log(Date() + " - DELETE /contacts/" + name);

//     presupuesto.deleteMany({ "name": name }, (err, removeResult) => {
//         if (err) {
//             console.error("Error accesing DB");
//             res.sendStatus(500);
//         } else {
//             if (removeResult.n > 1) {
//                 console.warn("Incosistent DB: duplicated name");
//             } else if (removeResult.n == 0) {
//                 res.sendStatus(404);
//             } else {
//                 res.sendStatus(200);
//             }
//         }
//     });

// }