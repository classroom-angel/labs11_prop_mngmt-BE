## Organizations

- GET to [https://classroom-angel-development.herokuapp.com/api/organizations/](https://classroom-angel-development.herokuapp.com/api/organizations/) - retrieve all organizations

| URL Params | Body | Returns                           |
| ---------- | ---- | --------------------------------- |
| N/A        | N/A  | All organization objects (return) |

```
Organization object (return): {
  "id": integer,
  "name": string,
  "city": string,
  "country": string,
  "expectedHours": integer
}
```

- GET to [https://classroom-angel-development.herokuapp.com/api/organizations/id](https://classroom-angel-development.herokuapp.com/api/organizations/id) - retrieve a specific organization

| URL Params | Body | Returns                      |
| ---------- | ---- | ---------------------------- |
| N/A        | N/A  | Organization object (return) |

- GET to [https://classroom-angel-development.herokuapp.com/api/organizations/id/relatedTableName](https://classroom-angel-development.herokuapp.com/api/organizations/id) - retrieve a specific organization's info related to that table.

| URL Params | Body | Returns                        |
| ---------- | ---- | ------------------------------ |
| N/A        | N/A  | Some array of objects (return) |

**Options for table name**:

- users
- equipment
- issues
- tags
- solutions

- POST to [https://classroom-angel-development.herokuapp.com/api/organizations/](https://classroom-angel-development.herokuapp.com/api/organizations/) - create an organization

| URL Params | Body                       | Returns                      |
| ---------- | -------------------------- | ---------------------------- |
| N/A        | Organization object (send) | Organization object (return) |

```
Organization object (return): {
  "id": integer,
  "name": string,
  "city": string,
  "country": string,
  "expectedHours": integer
}
```

- PUT to [https://classroom-angel-development.herokuapp.com/api/organizations/id](https://classroom-angel-development.herokuapp.com/api/organizations/id) - update a specific organization

| URL Params | Body                       | Returns                      |
| ---------- | -------------------------- | ---------------------------- |
| ID         | Organization object (send) | Organization object (return) |

- DELETE to [https://classroom-angel-development.herokuapp.com/api/organizations/id](https://classroom-angel-development.herokuapp.com/api/organizations/id) - delete a specific organization

| URL Params | Body | Returns                       |
| ---------- | ---- | ----------------------------- |
| ID         | N/A  | Organizations object (return) |
