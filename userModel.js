const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const environment = require('./src/environments/environment');

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

// Custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'E-mail invalido.');

userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

// Methods
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.cleanup = function () {
    return {
        nombre: this.name,
        email: this.email,
        password: this.password,
        saltSecret: this.saltSecret
    };
}

userSchema.methods.generatejwt = function () {
    return jwt.sign(
        { _id: this._id },
        "SECRET#123",//JWT_SECRET
        { expiresIn: "150m" }//JWT_EXP
    );
}

var user = mongoose.model('User', userSchema, "users");

module.exports = user;  