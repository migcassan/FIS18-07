var mongoose = require('mongoose');

var presupuestoSchema = new mongoose.Schema({
    nombre: String,
    categoria: String,
    monto: Number
});

presupuestoSchema.methods.cleanup = function () {
    return { nombre: this.name, categoria: this.categoria, monto: this.monto };
}

var Presupuesto = mongoose.model('Presupuesto', presupuestoSchema, 'presupuestos');

module.exports = Presupuesto;