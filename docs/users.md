## Users

- GET to [https://classroom-angel-development.herokuapp.com/api/users/](https://classroom-angel-development.herokuapp.com/api/users/) - retrieve all users

| URL Params | Body | Returns                   |
| ---------- | ---- | ------------------------- |
| N/A        | N/A  | All user objects (return) |

```
User object (return): {
  "id": integer,
  "username": string,
  "firstName": string,
  "lastName": string,
  "role": string,
  "organizationId": integer
}
```

- GET to [https://classroom-angel-development.herokuapp.com/api/users/id](https://classroom-angel-development.herokuapp.com/api/users/id) - retrieve a specfic user

| URL Params | Body | Returns              |
| ---------- | ---- | -------------------- |
| N/A        | N/A  | User object (return) |

- POST to [https://classroom-angel-development.herokuapp.com/api/users/register/](https://classroom-angel-development.herokuapp.com/api/register/) - register a user

| URL Params | Body                   | Returns              |
| ---------- | ---------------------- | -------------------- |
| N/A        | Register object (send) | User object (return) |

```
Register object (send): {
  "username": string,
  "firstName": string,
  "lastName": string,
  "role": string,
  "organizationName": string
}
```

- POST to [https://classroom-angel-development.herokuapp.com/api/users/login/](https://classroom-angel-development.herokuapp.com/api/login/) - log in a user

| URL Params | Body                | Returns              |
| ---------- | ------------------- | -------------------- |
| N/A        | Login object (send) | User object (return) |

```
Login object (send): {
  "username": string
}
```

- PUT to [https://classroom-angel-development.herokuapp.com/api/users/id](https://classroom-angel-development.herokuapp.com/api/users/id) - update a specific user

| URL Params | Body                   | Returns              |
| ---------- | ---------------------- | -------------------- |
| ID         | Register object (send) | User object (return) |

- DELETE to [https://classroom-angel-development.herokuapp.com/api/users/id](https://classroom-angel-development.herokuapp.com/api/users/id) - delete a specific user

| URL Params | Body | Returns              |
| ---------- | ---- | -------------------- |
| ID         | N/A  | User object (return) |
