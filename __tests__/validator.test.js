'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

describe('Testing validator', () => {
  test('Server responds with a status 500 to a GET request to the /person route without a name in the query string', async () => {
    const response = await request.get('/person');

    expect(response.status).toEqual(500);
  });

  test('Server responds with a status 200 to a GET request to the /person route with a name in the query string and returns valid data', async () => {
    const response = await request.get('/person?name=Micha');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ 'name': 'Micha' });
  });

});
