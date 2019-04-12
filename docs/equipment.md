## Equipment

- GET to [https://classroom-angel-development.herokuapp.com/api/equipment/](https://classroom-angel-development.herokuapp.com/api/equipment/) - retrieve all equipment

| URL Params | Body | Returns                        |
| ---------- | ---- | ------------------------------ |
| N/A        | N/A  | All equipment objects (return) |

```
Equipment object (return): {
  "id": integer,
  "name": string,
  "description": string,
  "working": integer,
  "damaged": integer,
  "organizationId": integer
}
```

- GET to [https://classroom-angel-development.herokuapp.com/api/equipment/id](https://classroom-angel-development.herokuapp.com/api/equipment/id) - retrieve a specific equipment record

| URL Params | Body | Returns                   |
| ---------- | ---- | ------------------------- |
| N/A        | N/A  | Equipment object (return) |

- POST to [https://classroom-angel-development.herokuapp.com/api/equipment/](https://classroom-angel-development.herokuapp.com/api/equipment/) - create an issue comment

| URL Params | Body                    | Returns                   |
| ---------- | ----------------------- | ------------------------- |
| N/A        | Equipment object (send) | Equipment object (return) |

```
Equipment object (send): {
  "id": integer,
  "name": string,
  "description": string,
  "working": integer,
  "damaged": integer,
  "organizationName": string
}
```

- PUT to [https://classroom-angel-development.herokuapp.com/api/equipment/id](https://classroom-angel-development.herokuapp.com/api/equipment/id) - update a specific issue comment

| URL Params | Body                    | Returns                   |
| ---------- | ----------------------- | ------------------------- |
| ID         | Equipment object (send) | Equipment object (return) |

- DELETE to [https://classroom-angel-development.herokuapp.com/api/equipment/id](https://classroom-angel-development.herokuapp.com/api/equipment/id) - delete a specific issue comment

| URL Params | Body | Returns                   |
| ---------- | ---- | ------------------------- |
| ID         | N/A  | Equipment object (return) |
