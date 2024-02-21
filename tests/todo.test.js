const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app'); // Import aplikasi Express.js

chai.use(chaiHttp);
const expect = chai.expect;

describe('Todo API', () => {
  it('should list all todos', (done) => {
    chai.request(app)
      .get('/todos')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should get a specific todo', (done) => {
    chai.request(app)
      .get('/todos/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.title).to.equal('Example Todo');
        done();
      });
  });

  it('should create a new todo', (done) => {
    chai.request(app)
      .post('/todos')
      .send({ title: 'New Todo' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body.title).to.equal('New Todo');
        done();
      });
  });

  it('should delete a specific todo', (done) => {
    chai.request(app)
      .delete('/todos/1')
      .end((err, res) => {
        expect(res).to.have.status(204);
        done();
      });
  });
});