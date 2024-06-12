const request = require('supertest');
const express = require('express');

const app = express();
app.get('/api', (req, res) => {
  res.send('Hello World!');
});

describe('GET /api', () => {
  it('responds with Hello World!', done => {
    request(app)
      .get('/api')
      .expect('Hello World!')
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
