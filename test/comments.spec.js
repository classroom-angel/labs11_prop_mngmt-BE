const request = require('supertest');
const server = require('../index');
const expect = require('chai').expect;

describe('Unit tests for comments', () => {
  const route = '/api/comments';
  const commentFields = ['id', 'content', 'userId', 'issueId'];

  it('has required keys on comments GET route', async () => {
    const response = await request(server).get(route);

    expect(response.body.comments[0]).to.have.keys(...commentFields);
  });

  it('has required keys on comments GET ID route', async () => {
    const response = await request(server).get(`${route}/1`);

    expect(response.body.comment).to.have.keys(...commentFields);
  });

  it('has required keys on comments POST route', async () => {
    const response = await request(server)
      .post(route)
      .send({
        id: 3,
        content: 'This was a successful day at the office.',
        userId: 492,
        issueId: 1
      });

    expect(response.body.comment).to.have.keys(...commentFields);
  });

  it('has required keys on comments PUT route', async () => {
    const response = await request(server)
      .put(`${route}/3`)
      .send({
        content: 'This was a horrible day at the office.',
        userId: 492,
        issueId: 1
      });

    expect(response.body.comment).to.have.keys(...commentFields);
  });

  it('has required keys on comments DELETE route', async () => {
    const response = await request(server).delete(`${route}/3`);

    expect(response.body.comment).to.have.keys(...commentFields);
  });
});
