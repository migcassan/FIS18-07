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
        nombre: this.name,
        categoria: this.categoria,
        cantidad: this.cantidad,
        monto: this.monto
    };
}

var Presupuesto = mongoose.model('Presupuesto', presupuestoSchema, 'presupuestos');

module.exports = Presupuesto;