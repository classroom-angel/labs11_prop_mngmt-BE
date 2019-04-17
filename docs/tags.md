## Tags

- GET to [https://classroom-angel-development.herokuapp.com/api/tags/](https://classroom-angel-development.herokuapp.com/api/tags/) - retrieve all tags

| URL Params | Body | Returns                  |
| ---------- | ---- | ------------------------ |
| N/A        | N/A  | All tag objects (return) |

```
Tag object (return): {
  "id": integer,
  "name": string,
  "issueId": integer,
  "organizationId": integer
}
```

- GET to [https://classroom-angel-development.herokuapp.com/api/tags/id](https://classroom-angel-development.herokuapp.com/api/tags/id) - retrieve a specific tag

| URL Params | Body | Returns             |
| ---------- | ---- | ------------------- |
| N/A        | N/A  | Tag object (return) |

- POST to [https://classroom-angel-development.herokuapp.com/api/tags/](https://classroom-angel-development.herokuapp.com/api/tags/) - create a tag

| URL Params | Body              | Returns             |
| ---------- | ----------------- | ------------------- |
| N/A        | Tag object (send) | Tag object (return) |

```
Tag object (send): {
  "name": string,
  "organizationId": integer
}
```

- PUT to [https://classroom-angel-development.herokuapp.com/api/tags/id](https://classroom-angel-development.herokuapp.com/api/tags/id) - update a specific tag

| URL Params | Body              | Returns             |
| ---------- | ----------------- | ------------------- |
| ID         | Tag object (send) | Tag object (return) |

- DELETE to [https://classroom-angel-development.herokuapp.com/api/tags/id](https://classroom-angel-development.herokuapp.com/api/tags/id) - delete a specific tag

| URL Params | Body | Returns             |
| ---------- | ---- | ------------------- |
| ID         | N/A  | Tag object (return) |
