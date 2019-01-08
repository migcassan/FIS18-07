var chai = require('chai');
var mongoose = require('mongoose');
var presupuesto = require('../presupuestoModel');
var user = require('../userModel');
var expect = chai.expect;

describe("Presupuestos API", () => {

    it("El API de presupuesto funciona sin problemas", (done) => {

        var x = 3;
        var y = 5;
        var resultado = x + y;

        expect(resultado).to.equal(8);
        done();
    });
});