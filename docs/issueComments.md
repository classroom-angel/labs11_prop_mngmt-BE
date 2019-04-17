## Issue Comments

- GET to [https://classroom-angel-development.herokuapp.com/api/comments/](https://classroom-angel-development.herokuapp.com/api/comments/) - retrieve all issue comments

| URL Params | Body | Returns                      |
| ---------- | ---- | ---------------------------- |
| N/A        | N/A  | All comment objects (return) |

```
Comment object (return): {
  "id": integer,
  "content": string,
  "userId": integer,
  "issueId": integer
}
```

- GET to [https://classroom-angel-development.herokuapp.com/api/comments/id](https://classroom-angel-development.herokuapp.com/api/comments/id) - retrieve a specific issue comment

| URL Params | Body | Returns                 |
| ---------- | ---- | ----------------------- |
| N/A        | N/A  | Comment object (return) |

- POST to [https://classroom-angel-development.herokuapp.com/api/comments/](https://classroom-angel-development.herokuapp.com/api/comments/) - create an issue comment

| URL Params | Body                  | Returns                 |
| ---------- | --------------------- | ----------------------- |
| N/A        | Comment object (send) | Comment object (return) |

```
Comment object (send): {
  "content": string,
  "userId": integer,
  "issueId": integer
}
```

- PUT to [https://classroom-angel-development.herokuapp.com/api/comments/id](https://classroom-angel-development.herokuapp.com/api/comments/id) - update a specific issue comment

| URL Params | Body                  | Returns                 |
| ---------- | --------------------- | ----------------------- |
| ID         | Comment object (send) | Comment object (return) |

- DELETE to [https://classroom-angel-development.herokuapp.com/api/comments/id](https://classroom-angel-development.herokuapp.com/api/comments/id) - delete a specific issue comment

| URL Params | Body | Returns                 |
| ---------- | ---- | ----------------------- |
| ID         | N/A  | Comment object (return) |
