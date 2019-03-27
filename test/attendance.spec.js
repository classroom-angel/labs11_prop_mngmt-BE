const request = require('supertest');
const server = require('../index');
const expect = require('chai').expect;

describe('Unit tests for attendance', () => {
  it('has required keys on attendance GET route', async () => {
    const response = await request(server).get('/api/attendance/');

    expect(response.body.attendance[0]).to.have.keys(
      'expectedHours',
      'id',
      'lastIn',
      'lastOut',
      'totalMinutesMissed'
    );
  });

  it('has required keys on attendance GET ID route', async () => {
    const response = await request(server).get('/api/attendance/1');

    expect(response.body.attendance).to.have.keys(
      'expectedHours',
      'id',
      'lastIn',
      'lastOut',
      'totalMinutesMissed'
    );
  });

  it('has required keys on attendance POST route', async () => {
    const response = await request(server)
      .post('/api/attendance/')
      .send({
        id: 3,
        lastIn: 10,
        lastOut: 10,
        totalMinutesMissed: 100,
        expectedHours: 40
      });

    expect(response.body.attendance).to.have.keys(
      'expectedHours',
      'id',
      'lastIn',
      'lastOut',
      'totalMinutesMissed'
    );
  });
});
