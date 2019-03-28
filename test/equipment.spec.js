const request = require('supertest');
const server = require('../index');
const expect = require('chai').expect;

describe('Unit tests for equipment', () => {
  const route = '/api/equipment';
  const equipmentFields = [
    'id',
    'name',
    'description',
    'working',
    'damaged',
    'organizationId'
  ];

  it('has required keys on equipment GET route', async () => {
    const response = await request(server).get(route);

    expect(response.body.equipment[0]).to.have.keys(...equipmentFields);
  });

  it('has required keys on equipment GET ID route', async () => {
    const response = await request(server).get(`${route}/1`);

    expect(response.body.equipment).to.have.keys(...equipmentFields);
  });

  it('has required keys on equipment POST route', async () => {
    const response = await request(server)
      .post(route)
      .send({
        id: 3,
        name: 'Footballs',
        description: 'The old pigskin',
        working: 83,
        damaged: 17,
        organizationName: 'Evil Corp'
      });

    expect(response.body.equipment).to.have.keys(...equipmentFields);
  });
});
