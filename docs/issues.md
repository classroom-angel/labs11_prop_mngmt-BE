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

- GET to [https://classroom-angel-development.herokuapp.com/api/issues/id/images](https://classroom-angel-development.herokuapp.com/api/issues/id/images) - retrieve a specific issue's images

| URL Params | Body | Returns                        |
| ---------- | ---- | ------------------------------ |
| N/A        | N/A  | Issue's image objects (return) |

```
Image object (return): {
  "id": integer,
  "path": string (name.extension),
  "issueId": integer)
}
```

- POST to [https://classroom-angel-development.herokuapp.com/api/issues/id/images](https://classroom-angel-development.herokuapp.com/api/issues/id/images) - create images for a specific issue

| URL Params | Body                            | Returns                      |
| ---------- | ------------------------------- | ---------------------------- |
| N/A        | New image object(s) as FormData | New image object(s) (return) |

- POST to [https://classroom-angel-development.herokuapp.com/api/issues/](https://classroom-angel-development.herokuapp.com/api/issues/) - create an issue

| URL Params | Body                | Returns                |
| ---------- | ------------------- | ---------------------- |
| N/A        | Issue object (send) | Issues object (return) |

```Issues object (send): {
  "date": string (MM-DD-YY), (default: current date)
  "name": string,
  "notes": string,
  "status": string, (default: "Needs attention")
  "isVisit": boolean, (default: false)
  "organizationId": string,
  "equipmentId": integer (optional)
```

- PUT to [https://classroom-angel-development.herokuapp.com/api/issues/id](https://classroom-angel-development.herokuapp.com/api/issues/id) - update a specific issue comment

| URL Params | Body                | Returns               |
| ---------- | ------------------- | --------------------- |
| ID         | Issue object (send) | Issue object (return) |

- DELETE to [https://classroom-angel-development.herokuapp.com/api/issues/id](https://classroom-angel-development.herokuapp.com/api/issues/id) - delete a specific issue

| URL Params | Body | Returns               |
| ---------- | ---- | --------------------- |
| ID         | N/A  | Issue object (return) |
