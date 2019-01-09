const mongoose = require("mongoose");
var chai = require('chai');
var PresTest = require('../presupuestoModel');
var userTest = require('../userModel');
var expect = chai.expect;

describe('Presupuesto DB test Connection', () => {
    before((done) => {
        var dbURL = process.env.DB || "mongodb://localhost:27017/presupuestoTest";

        mongoose.connect(dbURL, { useCreateIndex: true, useNewUrlParser: true });

        var db = mongoose.connection;

        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function () {
            done();
        });
    });

    beforeEach((done) => {
        PresTest.deleteMany({}, (err) => {
            done();
        });
    });

    it('writes a budget in the DB', (done) => {
        var presToInsert = new PresTest({ name: "test", category: "testing", quantity: 1, amount: 5 });
        presToInsert.save((err, presupuesto) => {
            expect(err).is.null;
            PresTest.find({}, (err, presupuestos) => {
                expect(presupuestos).to.have.lengthOf(1);
                done();
            });
        });
    });

    it('writes a user in the DB', (done) => {
        var userToInsert = new userTest({ name: "test", email: "testing@test.com", password: "1234" });
        userToInsert.save((err, userT) => {
            expect(err).is.null;
            userTest.find({}, (err, users) => {
                expect(users).to.have.lengthOf(1);
                done();
            });
        });
    });

    after((done) => {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(done);
        });
    })

})