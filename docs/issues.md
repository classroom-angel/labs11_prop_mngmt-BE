## Issues

- GET to [https://classroom-angel-development.herokuapp.com/api/issues/](https://classroom-angel-development.herokuapp.com/api/issues/) - retrieve all issues

| URL Params | Body | Returns                     |
| ---------- | ---- | --------------------------- |
| N/A        | N/A  | All issues objects (return) |

```
Issues object (return): {
  "id": integer,
  "date": string (MM-DD-YY),
  "name": string,
  "notes": string,
  "status": string,
  "isVisit": boolean,
  "organizationId": integer,
  "equipmentId": integer (when applicable)
}
```

- GET to [https://classroom-angel-development.herokuapp.com/api/issues/id](https://classroom-angel-development.herokuapp.com/api/issues/id) - retrieve a specific issue

| URL Params | Body | Returns                |
| ---------- | ---- | ---------------------- |
| N/A        | N/A  | Issues object (return) |

- POST to [https://classroom-angel-development.herokuapp.com/api/issues/](https://classroom-angel-development.herokuapp.com/api/issues/) - create an issue

| URL Params | Body                | Returns                |
| ---------- | ------------------- | ---------------------- |
| N/A        | Issue object (send) | Issues object (return) |

```Issues object (send): {
"id": integer,
"date": string (MM-DD-YY),
"name": string,
"notes": string,
"status": string, ("Needs attention", "Fixed", etc.)
"isVisit": boolean,
"organizationId": string,
"equipmentId": integer (when applicable)
```

- PUT to [https://classroom-angel-development.herokuapp.com/api/issues/id](https://classroom-angel-development.herokuapp.com/api/issues/id) - update a specific issue comment

| URL Params | Body                | Returns               |
| ---------- | ------------------- | --------------------- |
| ID         | Issue object (send) | Issue object (return) |

- DELETE to [https://classroom-angel-development.herokuapp.com/api/issues/id](https://classroom-angel-development.herokuapp.com/api/issues/id) - delete a specific issue

| URL Params | Body | Returns               |
| ---------- | ---- | --------------------- |
| ID         | N/A  | Issue object (return) |
