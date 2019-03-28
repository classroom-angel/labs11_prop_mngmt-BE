const request = require('supertest');
const server = require('../index');
const expect = require('chai').expect;

describe('Unit tests for equipment', () => {
  it('has required keys on equipment GET route', async () => {
    const response = await request(server).get('/api/equipment/');

    expect(response.body.equipment[0]).to.have.keys(
      'id',
      'name',
      'description',
      'working',
      'damaged',
      'organizationId'
    );
  });

  it('has required keys on equipment GET ID route', async () => {
    const response = await request(server).get('/api/equipment/1');

    expect(response.body.equipment).to.have.keys(
      'id',
      'name',
      'description',
      'working',
      'damaged',
      'organizationId'
    );
  });

  it('has required keys on equipment POST route', async () => {
    const response = await request(server)
      .post('/api/equipment/')
      .send({
        id: 3,
        name: 'Footballs',
        description: 'The old pigskin',
        working: 83,
        damaged: 17,
        organizationName: 'Evil Corp'
      });

    expect(response.body.equipment).to.have.keys(
      'id',
      'name',
      'description',
      'working',
      'damaged',
      'organizationId'
    );
  });

  it('has required keys on equipment PUT route', async () => {
    const response = await request(server)
      .put('/api/equipment/3')
      .send({
        name: 'Basketballs',
        description: 'The old round orange ball',
        working: 83,
        damaged: 17,
        organizationName: 'Evil Corp'
      });

    expect(response.body.equipment).to.have.keys(
      'id',
      'name',
      'description',
      'working',
      'damaged',
      'organizationId'
    );
  });

  it('has required keys on equipment DELETE route', async () => {
    const response = await request(server).delete('/api/equipment/3');

    expect(response.body.equipment).to.have.keys(
      'id',
      'name',
      'description',
      'working',
      'damaged',
      'organizationId'
    );
  });
});
