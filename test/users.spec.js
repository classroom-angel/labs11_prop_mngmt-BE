const request = require('supertest');
const server = require('../index');
const expect = require('chai').expect;

describe('Unit tests for users', () => {
  const route = '/api/users';
  const userFields = [
    'id',
    'username',
    'firstName',
    'lastName',
    'role',
    'organizationId'
  ];

  it('has required keys on users GET route', async () => {
    const response = await request(server).get(route);

    expect(response.body.users[0]).to.have.keys(...userFields);
  });

  it('has required keys on users GET ID route', async () => {
    const response = await request(server).get(`${route}/1`);

    expect(response.body.user).to.have.keys(...userFields);
  });

  it('has required keys on users register POST route', async () => {
    const response = await request(server)
      .post(`${route}/register`)
      .send({
        username: 'greg.davis@gmail.com',
        firstName: 'Greg',
        lastName: 'Davis',
        role: 'teacher',
        organizationName: 'Rosehill All Girls Boarding School'
      });

    expect(response.body.user).to.have.keys(...userFields);
  });

  it('has required keys on users PUT route', async () => {
    const response = await request(server)
      .put(`${route}/2`)
      .send({
        username: 'tom.davies@gmail.com',
        firstName: 'Tom',
        lastName: 'Davies',
        role: 'teacher',
        organizationName: 'Rosehill All Girls Boarding School'
      });

    expect(response.body.user).to.have.keys(...userFields);
  });

  it('has required keys on users DELETE route', async () => {
    const response = await request(server).del(`${route}/450`);

    expect(response.body.user).to.have.keys(...userFields);
  });
});
