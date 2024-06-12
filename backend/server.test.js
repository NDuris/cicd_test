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

describe('GET /add', () => {
    it('responds with the sum of two numbers', async () => {
        const response = await request(app)
          .get('/add')
          .query({ num1: 5, num2: 3 });
        
        expect(response.text).toBe('Sum of 5 and 3 is 8.');
      });
});
