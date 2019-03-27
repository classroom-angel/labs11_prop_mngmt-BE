const request = require('supertest');
const server = require('../index');
const expect = require('chai').expect;

describe('Unit tests for server/database', () => {
  // base tests
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

  // attendance tests
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

  // comments tests
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

  // equipment tests
  it('has required keys on equipment GET route', async () => {
    const response = await request(server).get('/api/equipment/');

    expect(response.body.equipment[0]).to.have.keys(
      'id',
      'name',
      'description',
      'working',
      'damaged',
      'organizationId'
    );
  });

  it('has required keys on equipment GET ID route', async () => {
    const response = await request(server).get('/api/equipment/1');

    expect(response.body.equipment).to.have.keys(
      'id',
      'name',
      'description',
      'working',
      'damaged',
      'organizationId'
    );
  });

  it('has required keys on equipment POST route', async () => {
    const response = await request(server)
      .post('/api/equipment/')
      .send({
        id: 3,
        name: 'Footballs',
        description: 'The old pigskin',
        working: 83,
        damaged: 17,
        organizationName: 'Evil Corp'
      });

    expect(response.body.equipment).to.have.keys(
      'id',
      'name',
      'description',
      'working',
      'damaged',
      'organizationId'
    );
  });

  // issues tests
  it('has required keys on issues GET route', async () => {
    const response = await request(server).get('/api/issues/');

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

  it('has required keys on issues GET ID route', async () => {
    const response = await request(server).get('/api/issues/1');

    expect(response.body.issue).to.have.keys(
      'id',
      'date',
      'name',
      'notes',
      'status',
      'isVisit',
      'organizationId'
    );
  });

  it('has required keys on issues POST route', async () => {
    const response = await request(server)
      .post('/api/issues/')
      .send({
        id: 3,
        date: '03-27-19',
        name: 'Footballs deflated',
        notes: 'We need to fix these ones so the kids can play!',
        status: 'Needs attention',
        isVisit: true,
        organizationId: 1,
        equipmentId: 3
      });

    expect(response.body.issue).to.have.keys(
      'id',
      'date',
      'name',
      'notes',
      'status',
      'isVisit',
      'organizationId'
    );
  });

  // organizations tests
  it('has required keys on organizations GET route', async () => {
    const response = await request(server).get('/api/organizations/');

    expect(response.body.organizations[0]).to.have.keys(
      'id',
      'name',
      'city',
      'country',
      'expectedHours'
    );
  });

  it('has required keys on organizations GET ID route', async () => {
    const response = await request(server).get('/api/organizations/1');

    expect(response.body.organization).to.have.keys(
      'id',
      'name',
      'city',
      'country',
      'expectedHours'
    );
  });

  it('has required keys on organizations POST route', async () => {
    const response = await request(server)
      .post('/api/organizations/')
      .send({
        id: 3,
        name: 'Medium Corp',
        city: 'Philadelphia',
        country: 'USA',
        expectedHours: 40
      });

    expect(response.body.organization).to.have.keys(
      'id',
      'name',
      'city',
      'country',
      'expectedHours'
    );
  });

  // solutions tests
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

  // tags tests
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

  // users tests
  it('has required keys on users GET route', async () => {
    const response = await request(server).get('/api/users/');

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

  it('has required keys on users GET ID route', async () => {
    const response = await request(server).get('/api/users/1');

    expect(response.body.user).to.have.keys(
      'id',
      'username',
      'firstName',
      'lastName',
      'password',
      'role',
      'organizationId'
    );
  });

  it('has required keys on users register POST route', async () => {
    const response = await request(server)
      .post('/api/users/register')
      .send({
        username: 'greg.davis@gmail.com',
        firstName: 'Greg',
        lastName: 'Davis',
        password: 'hgfdeuhijidjd51d6545',
        role: 'teacher',
        organizationName: 'Evil Corp'
      });

    expect(response.body.user).to.have.keys(
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
