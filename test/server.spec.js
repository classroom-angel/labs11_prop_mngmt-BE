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

  it('has required keys on attendance GET route', async () => {
    const response = await request(server).get('/api/attendance');

    expect(response.body.attendance[0]).to.have.keys(
      'expectedHours',
      'id',
      'lastIn',
      'lastOut',
      'totalMinutesMissed'
    );
  });

  it('has required keys on comments GET route', async () => {
    const response = await request(server).get('/api/comments');

    expect(response.body.comments[0]).to.have.keys(
      'id',
      'content',
      'userId',
      'issueId'
    );
  });

  it('has required keys on equipment GET route', async () => {
    const response = await request(server).get('/api/equipment');

    expect(response.body.equipment[0]).to.have.keys(
      'id',
      'name',
      'description',
      'working',
      'damaged',
      'organizationId'
    );
  });

  it('has required keys on issues GET route', async () => {
    const response = await request(server).get('/api/issues');

    expect(response.body.issues[0]).to.have.keys(
      'id',
      'date',
      'name',
      'notes',
      'status',
      'isVisit',
      'organizationId'
    );
  });

  it('has required keys on organizations GET route', async () => {
    const response = await request(server).get('/api/organizations');

    expect(response.body.organizations[0]).to.have.keys(
      'id',
      'name',
      'city',
      'country',
      'expectedHours'
    );
  });

  it('has required keys on solutions GET route', async () => {
    const response = await request(server).get('/api/solutions');

    expect(response.body.solutions[0]).to.have.keys(
      'id',
      'name',
      'date',
      'time',
      'issueId'
    );
  });

  it('has required keys on tags GET route', async () => {
    const response = await request(server).get('/api/tags');

    expect(response.body.tags[0]).to.have.keys('id', 'name', 'issueId');
  });

  it('has required keys on users GET route', async () => {
    const response = await request(server).get('/api/users');

    expect(response.body.users[0]).to.have.keys(
      'id',
      'username',
      'firstName',
      'lastName',
      'password',
      'role',
      'organizationId'
    );
  });
});
