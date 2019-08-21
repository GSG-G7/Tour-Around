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


test('post', (t) => {
  supertest(app)
    .post('/postPlace')
    .send({
      userName: 'yosef',
      email: 'yosef@gmail.com',
      phone: '45646',
      placeName: 'take',
      location: 'gaza',
      service: 'food',
      delivery: false,
      img: 'https://www.google.com'
    })
    .expect(201)
    .expect('content-type', /html/)
    .end((err, res) => {
      // t.error(err);
      console.log(res.body);
      t.end();
    });
});
