var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    clave: String,
    key: String
});

userSchema.methods.cleanup = function () {
    return {
        nombre: this.name,
        email: this.email,
        monto: this.monto,
        key: this.key
    };
}

var user = mongoose.model('User', userSchema);

module.exports = user;  
