const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'El nombre no puede estar vacío'
    },
    email: {
        type: String,
        required: 'El E-mail no puede estar vacío',
        unique: true
    },
    password: {
        type: String,
        required: 'La clave no puede estar vacía',
        minlength: [4, 'Debe contener al menos 4 caracteres']
    },
    saltSecret: String
});

userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

userSchema.methods.cleanup = function () {
    return {
        nombre: this.name,
        email: this.email,
        password: this.password,
        saltSecret: this.saltSecret
    };
}

var user = mongoose.model('User', userSchema, "users");

module.exports = user;  