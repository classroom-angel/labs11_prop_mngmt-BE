const request = require('supertest');
const server = require('../index');
const expect = require('chai').expect;

describe('server.js', () => {
  it('runs the tests', () => {
    expect(true).to.be.true;
  });
  it('returns a 200 (OK) status', async () => {
    const response = await request(server).get('/');

    expect(response.status).to.equal(200);
  });
  it('returns sanity check', async () => {
    const response = await request(server).get('/');

    expect(response.body).to.include({ success: "You're not insane!" });
  });
});
