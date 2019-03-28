const request = require('supertest');
const server = require('../index');
const expect = require('chai').expect;

describe('Unit tests for attendance', () => {
  const route = '/api/attendance';
  const attendanceFields = [
    'expectedHours',
    'id',
    'lastIn',
    'lastOut',
    'totalMinutesMissed'
  ];

  it('has required keys on attendance GET route', async () => {
    const response = await request(server).get(route);

    expect(response.body.attendance[0]).to.have.keys(...attendanceFields);
  });

  it('has required keys on attendance GET ID route', async () => {
    const response = await request(server).get(`${route}/1`);

    expect(response.body.attendance).to.have.keys(...attendanceFields);
  });

  it('has required keys on attendance POST route', async () => {
    const response = await request(server)
      .post(route)
      .send({
        id: 3,
        lastIn: 10,
        lastOut: 10,
        totalMinutesMissed: 100,
        expectedHours: 40
      });

    expect(response.body.attendance).to.have.keys(...attendanceFields);
  });
});
