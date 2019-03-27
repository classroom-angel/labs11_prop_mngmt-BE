const request = require('supertest');
const server = require('../index');
const expect = require('chai').expect;

describe('Unit tests for tags', () => {
  it('has required keys on tags GET route', async () => {
    const response = await request(server).get('/api/tags/');

    expect(response.body.tags[0]).to.have.keys('id', 'name', 'issueId');
  });

  it('has required keys on tags GET ID route', async () => {
    const response = await request(server).get('/api/tags/1');

    expect(response.body.tag).to.have.keys('id', 'name', 'issueId');
  });

  it('has required keys on tags POST route', async () => {
    const response = await request(server)
      .post('/api/tags/')
      .send({
        id: 3,
        name: 'Sports'
      });

    expect(response.body.tag).to.have.keys('id', 'name');
  });
});
