var server = require('../server');
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);


describe('Presupuesto API', () => {

    describe('GET /', () => {
        it('should return HTML', (done) => {
            chai.request(server.app)
                .get('/')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.html;
                    done();
                });
        });
    });

    describe('GET /signup', () => {
        it('should return HTML', (done) => {
            chai.request(server.app)
                .get('/signup')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.html;
                    done();
                });
        });
    });

    describe('GET /login', () => {
        it('should return HTML', (done) => {
            chai.request(server.app)
                .get('/login')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.html;
                    done();
                });
        });
    });

    describe('GET /main', () => {
        it('should return HTML', (done) => {
            chai.request(server.app)
                .get('/main')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.html;
                    done();
                });
        });
    });

    describe('GET /presupuestos', () => {
        it('should return an autentication error', (done) => {
            chai.request(server.app)
                .get('/api/v1/presupuesto')
                .end((err, res) => {
                    expect(res).to.have.status(403);
                    expect(res).to.be.json;
                    done();
                });
        });
    });

});