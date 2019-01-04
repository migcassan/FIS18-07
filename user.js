var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    saltSecret: {
        type: String
    }
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
