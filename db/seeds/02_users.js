let faker = require('faker');
let fakeUsers = [];
roles = ['teacher', 'board member', 'school admin'];

fakeUsers.push({
  username: 'sunshineteacher7',
  first_name: 'Janesworth',
  last_name: 'Doeballs',
  role: 'teacher',
  organization_id: 1
});

for (let i = 1; i < 500; i++) {
  const username = faker.internet.userName();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const role = roles[Math.floor(Math.random() * roles.length)];

  const user = {
    username: firstName + username + lastName,
    first_name: firstName,
    last_name: lastName,
    role,
    organization_id: 1
  };

  fakeUsers.push(user);
}

const { makeSeed } = require('../dataHelpers/seeds');
exports.seed = makeSeed('users', fakeUsers);
