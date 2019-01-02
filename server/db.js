const mongoose = require("mongoose");


mongoose.connect(process.env.DB || "mongodb://localhost:27017/presupuestosTest",
    { useNewUrlParser: true }, (err) => {

        if (!err) {
            console.log("MongoDB Connection Complete");
        } else {
            console.log("Error in DB Connection: " + JSON.stringify(err, undefined, 2));
        }

    });

module.exports = mongoose;

require('./models/presupuestos');
require('./models/user');
