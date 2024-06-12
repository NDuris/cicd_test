const request = require('supertest');
const express = require('express');

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.send('Hello World!');
});

// Integrationstest til at teste serverens funktionalitet
describe('Server functionality', () => {
  // Test, der kontrollerer, om serveren svarer på /api-endepunktet
  it('responds with Hello World! from /api endpoint', done => {
    request(app)
      .get('/api')
      .expect(200) // Forvent HTTP-statuskode 200 (OK)
      .expect('Hello World!') // Forvent svarteksten "Hello World!"
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});

// Start serveren før integrationstestene
before(done => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    done();
  });
});

// Luk serveren efter integrationstestene
after(done => {
  app.close(() => {
    console.log('Server closed');
    done();
  });
});
