let faker = require('faker');
let fakeUsers = [];
roles = ['teacher', 'board member', 'school admin'];

for (let i = 0; i < 500; i++) {
  const username = faker.fake(internet.userName);
  const firstName = faker.fake(name.firstName);
  const lastName = faker.fake(name.lastName);
  const password = faker.fake(internet.password);
  const role = roles[Math.floor(Math.random() * roles.length)];
  const orgId = faker.fake(random.number);

  const object = {
    username: username,
    firstName: firstName,
    lastName: lastName,
    password: password,
    role: role,
    orgId: orgId
  };

  fakeUsers.push(object);
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert(fakeUsers);
    });
};
