var mongoose = require('mongoose');

var presupuestoSchema = new mongoose.Schema({
    nombre: {
        type: String
    },
    categoria: {
        type: String
    },
    cantidad: {
        type: Number
    },
    monto: {
        type: Number
    }
});

presupuestoSchema.methods.cleanup = function () {
    return {
        nombre: this.nombre,
        categoria: this.categoria,
        cantidad: this.cantidad,
        monto: this.monto
    };
}

var Presupuesto = mongoose.model('presupuesto', presupuestoSchema, 'presupuestos');

module.exports = {Presupuesto};
