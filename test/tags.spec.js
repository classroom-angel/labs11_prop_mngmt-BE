const request = require('supertest');
const server = require('../index');
const expect = require('chai').expect;

describe('Unit tests for tags', () => {
  const route = '/api/tags';
  const tagFields = ['id', 'name', 'issueId'];

  it('has required keys on tags GET route', async () => {
    const response = await request(server).get(route);

    expect(response.body.tags[0]).to.have.keys(...tagFields);
  });

  it('has required keys on tags GET ID route', async () => {
    const response = await request(server).get(`${route}/1`);

    expect(response.body.tag).to.have.keys(...tagFields);
  });

  it('has required keys on tags POST route', async () => {
    const response = await request(server)
      .post(route)
      .send({
        id: 3,
        name: 'Sports'
      });

    expect(response.body.tag).to.have.keys('id', 'name');
  });

  it('has required keys on tags PUT route', async () => {
    const response = await request(server)
      .put(`${route}/3`)
      .send({
        name: 'Sportsball'
      });

    expect(response.body.tag).to.have.keys('id', 'name');
  });

  it('has required keys on tags DELETE route', async () => {
    const response = await request(server).delete(`${route}/3`);

    expect(response.body.tag).to.have.keys('id', 'name');
  });
});
