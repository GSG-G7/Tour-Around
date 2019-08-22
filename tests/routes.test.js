const test = require('tape');
const supertest = require('supertest');
const app = require('./../src/app');

test('Status Code equal 200', (t) => {
  supertest(app)
    .get('/')
    .expect(200)
    .expect('content-type', /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.text.includes('<h1> Hi Team</h1>'), true, 'The page should have a heading tag');
      t.end();
    });
});

test('testing at route /postplace', (t) => {
  supertest(app)
    .post('/postPlace')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) {
        t.error(err);
      }
      t.end();
    });
});
