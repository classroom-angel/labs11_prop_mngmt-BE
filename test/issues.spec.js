const request = require('supertest');
const server = require('../index');
const expect = require('chai').expect;

describe('Unit tests for issues', () => {
  const route = '/api/issues';
  const issueFields = [
    'id',
    'date',
    'name',
    'notes',
    'status',
    'isVisit',
    'organizationId'
  ];

  it('has required keys on issues GET route', async () => {
    const response = await request(server).get(route);

    expect(response.body.issues[0]).to.have.keys(...issueFields);
  });

  it('has required keys on issues GET ID route', async () => {
    const response = await request(server).get(`${route}/1`);

    expect(response.body.issue).to.have.keys(...issueFields);
  });

  it('has required keys on issues POST route', async () => {
    const response = await request(server)
      .post(route)
      .send({
        id: 3,
        date: '03-27-19',
        name: 'Basketballs deflated',
        notes: 'We need to fix these ones so the kids can play!',
        status: 'Needs attention',
        isVisit: false,
        organizationId: 1,
        equipmentId: 2
      });

    expect(response.body.issue).to.have.keys(...issueFields);
  });

  it('has required keys on issues PUT route', async () => {
    const response = await request(server)
      .put(`${route}/3`)
      .send({
        date: '03-28-19',
        name: 'Knives not sharpened',
        equipmentId: 1
      });

    expect(response.body.issue).to.have.keys(...issueFields);
  });

  it('has required keys on issues DELETE route', async () => {
    const response = await request(server).delete(`${route}/2`);

    expect(response.body.issue).to.have.keys(...issueFields);
  });
});
