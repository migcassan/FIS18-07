var mongoose = require('mongoose');

var presupuestoSchema = new mongoose.Schema({
    name: {
        type: String,
        required:"El nombre no puede estar vacio!"
    },
    category: {
        type: String
    },
    quantity: {
        type: Number
    },
    amount: {
        type: Number
    }
});

presupuestoSchema.methods.cleanup = function () {
    return { 
        name: this.name,
        category: this.category,
        quantity: this.quantity,
        amount: this.amount
    };
}

var Presupuesto = mongoose.model('presupuesto', presupuestoSchema, 'presupuestos');

module.exports = Presupuesto;
