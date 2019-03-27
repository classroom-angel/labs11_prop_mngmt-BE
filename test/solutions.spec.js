const request = require('supertest');
const server = require('../index');
const expect = require('chai').expect;

describe('Unit tests for solutions', () => {
  it('has required keys on solutions GET route', async () => {
    const response = await request(server).get('/api/solutions/');

    expect(response.body.solutions[0]).to.have.keys(
      'id',
      'name',
      'date',
      'time',
      'issueId'
    );
  });

  it('has required keys on solutions GET ID route', async () => {
    const response = await request(server).get('/api/solutions/1');

    expect(response.body.solution).to.have.keys(
      'id',
      'name',
      'date',
      'time',
      'issueId'
    );
  });

  it('has required keys on solutions POST route', async () => {
    const response = await request(server)
      .post('/api/solutions/')
      .send({
        id: 2,
        name: 'Football patches',
        date: '04-15-19',
        time: '4:15 PM'
      });

    expect(response.body.solution).to.have.keys('id', 'name', 'date', 'time');
  });
});
