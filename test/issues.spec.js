const request = require('supertest');
const server = require('../index');
const expect = require('chai').expect;

describe('Unit tests for issues', () => {
  it('has required keys on issues GET route', async () => {
    const response = await request(server).get('/api/issues/');

    expect(response.body.issues[0]).to.have.keys(
      'id',
      'date',
      'name',
      'notes',
      'status',
      'isVisit',
      'organizationId'
    );
  });

  it('has required keys on issues GET ID route', async () => {
    const response = await request(server).get('/api/issues/1');

    expect(response.body.issue).to.have.keys(
      'id',
      'date',
      'name',
      'notes',
      'status',
      'isVisit',
      'organizationId'
    );
  });

  it('has required keys on issues POST route', async () => {
    const response = await request(server)
      .post('/api/issues/')
      .send({
        id: 3,
        date: '03-27-19',
        name: 'Footballs deflated',
        notes: 'We need to fix these ones so the kids can play!',
        status: 'Needs attention',
        isVisit: true,
        organizationId: 1,
        equipmentId: 3
      });

    expect(response.body.issue).to.have.keys(
      'id',
      'date',
      'name',
      'notes',
      'status',
      'isVisit',
      'organizationId'
    );
  });

  it('has required keys on issues PUT route', async () => {
    const response = await request(server)
      .put('/api/issues/3')
      .send({
        date: '03-28-19',
        name: 'Basketballs deflated',
        notes: 'We need to fix these ones so the kids can play!',
        status: 'Needs attention',
        isVisit: true,
        organizationId: 1,
        equipmentId: 3
      });

    expect(response.body.issue).to.have.keys(
      'id',
      'date',
      'name',
      'notes',
      'status',
      'isVisit',
      'organizationId'
    );
  });

  it('has required keys on issues DELETE route', async () => {
    const response = await request(server).delete('/api/issues/3');

    expect(response.body.issue).to.have.keys(
      'id',
      'date',
      'name',
      'notes',
      'status',
      'isVisit',
      'organizationId'
    );
  });
});
