let faker = require('faker');
let fakeUsers = [];
roles = ['teacher', 'board member', 'school admin'];

for (let i = 0; i < 500; i++) {
  const username = faker.fake('{{internet.userName}}');
  const first_name = faker.fake('{{name.firstName}}');
  const last_name = faker.fake('{{name.lastName}}');
  const password = faker.fake('{{internet.password}}');
  const role = roles[Math.floor(Math.random() * roles.length)];
  const organization_id = faker.fake('{{random.number}}');

  const object = {
    username: username,
    first_name: first_name,
    last_name: last_name,
    password: password,
    role: role
    //organization_id: organization_id
  };

  fakeUsers.push(object);
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert(fakeUsers);
    });
};
