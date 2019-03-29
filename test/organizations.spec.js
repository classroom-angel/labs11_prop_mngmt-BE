const request = require('supertest');
const server = require('../index');
const expect = require('chai').expect;

describe('Unit tests for organizations', () => {
  const route = '/api/organizations';
  const organizationFields = ['id', 'name', 'city', 'country', 'expectedHours'];

  it('has required keys on organizations GET route', async () => {
    const response = await request(server).get(route);

    expect(response.body.organizations[0]).to.have.keys(...organizationFields);
  });

  it('has required keys on organizations GET ID route', async () => {
    const response = await request(server).get(`${route}/1`);

    expect(response.body.organization).to.have.keys(...organizationFields);
  });

  it('has required keys on organizations POST route', async () => {
    const response = await request(server)
      .post(route)
      .send({
        id: 3,
        name: 'Medium Corp',
        city: 'Philadelphia',
        country: 'USA',
        expectedHours: 40
      });

    expect(response.body.organization).to.have.keys(...organizationFields);
  });

  it('has required keys on organizations PUT route', async () => {
    const response = await request(server)
      .put(`${route}/3`)
      .send({
        name: 'Pasta Corp',
        city: 'Philadelphia',
        country: 'USA',
        expectedHours: 50
      });

    expect(response.body.organization).to.have.keys(...organizationFields);
  });

  it('has required keys on organizations DELETE route', async () => {
    const response = await request(server).delete(`${route}/3`);

    expect(response.body.organization).to.have.keys(...organizationFields);
  });
});
