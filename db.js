const mongoose = require("mongoose");

var dbURL = process.env.DB || "mongodb://localhost:27017/presupuestosTest";
mongoose.connect(dbURL, { useCreateIndex: true, useNewUrlParser: true }, (err) => {

    if (!err) {
        console.log("MongoDB Connection Complete");
    } else {
        console.log("Error in DB Connection: " + JSON.stringify(err, undefined, 2));
    }

});

module.exports = mongoose;

require('./presupuestoModel');
require('./userModel');
