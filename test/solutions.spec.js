const request = require('supertest');
const server = require('../index');
const expect = require('chai').expect;

describe('Unit tests for solutions', () => {
  const route = '/api/solutions';
  const solutionFields = ['id', 'name', 'date', 'time'];

  it('has required keys on solutions GET route', async () => {
    const response = await request(server).get(route);

    expect(response.body.solutions[0]).to.have.keys(...solutionFields);
  });

  it('has required keys on solutions GET ID route', async () => {
    const response = await request(server).get(`${route}/1`);

    expect(response.body.solution).to.have.keys(...solutionFields);
  });

  it('has required keys on solutions POST route', async () => {
    const response = await request(server)
      .post(route)
      .send({
        id: 2,
        name: 'Football patches',
        date: '04-15-19',
        time: '4:15 PM'
      });

    expect(response.body.solution).to.have.keys(...solutionFields);
  });

  it('has required keys on solutions PUT route', async () => {
    const response = await request(server)
      .put(`${route}/1`)
      .send({
        name: 'Basketball patches',
        date: '04-15-19',
        time: '4:15 PM'
      });

    expect(response.body.solution).to.have.keys(...solutionFields);
  });

  it('has required keys on solutions DELETE route', async () => {
    const response = await request(server).delete(`${route}/2`);

    expect(response.body.solution).to.have.keys(...solutionFields);
  });
});
