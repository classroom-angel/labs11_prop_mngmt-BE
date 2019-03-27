const request = require('supertest');
const server = require('../index');
const expect = require('chai').expect;

describe('Unit tests for comments', () => {
  it('has required keys on comments GET route', async () => {
    const response = await request(server).get('/api/comments/');

    expect(response.body.comments[0]).to.have.keys(
      'id',
      'content',
      'userId',
      'issueId'
    );
  });

  it('has required keys on comments GET ID route', async () => {
    const response = await request(server).get('/api/comments/1');

    expect(response.body.comment).to.have.keys(
      'id',
      'content',
      'userId',
      'issueId'
    );
  });

  it('has required keys on comments POST route', async () => {
    const response = await request(server)
      .post('/api/comments/')
      .send({
        id: 3,
        content: 'This was a successful day at the office.',
        userId: 492,
        issueId: 1
      });

    expect(response.body.comment).to.have.keys(
      'id',
      'content',
      'userId',
      'issueId'
    );
  });
});
