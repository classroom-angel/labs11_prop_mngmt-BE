const request = require('supertest');
const server = require('../index');
const expect = require('chai').expect;

describe('Unit tests for organizations', () => {
  it('has required keys on organizations GET route', async () => {
    const response = await request(server).get('/api/organizations/');

    expect(response.body.organizations[0]).to.have.keys(
      'id',
      'name',
      'city',
      'country',
      'expectedHours'
    );
  });

  it('has required keys on organizations GET ID route', async () => {
    const response = await request(server).get('/api/organizations/1');

    expect(response.body.organization).to.have.keys(
      'id',
      'name',
      'city',
      'country',
      'expectedHours'
    );
  });

  it('has required keys on organizations POST route', async () => {
    const response = await request(server)
      .post('/api/organizations/')
      .send({
        id: 3,
        name: 'Medium Corp',
        city: 'Philadelphia',
        country: 'USA',
        expectedHours: 40
      });

    expect(response.body.organization).to.have.keys(
      'id',
      'name',
      'city',
      'country',
      'expectedHours'
    );
  });
});
