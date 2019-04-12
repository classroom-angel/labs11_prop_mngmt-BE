## Solutions

- GET to [https://classroom-angel-development.herokuapp.com/api/solutions/](https://classroom-angel-development.herokuapp.com/api/solutions/) - retrieve all solutions

| URL Params | Body | Returns                       |
| ---------- | ---- | ----------------------------- |
| N/A        | N/A  | All solution objects (return) |

```
Solution object (return): {
  "id": integer,
  "name": string,
  "date": string (MM_DD_YY),
  "time": string (HH:MM AM/PM),
  "issueId": integer,
  "organizationId": integer
}
```

- GET to [https://classroom-angel-development.herokuapp.com/api/solutions/id](https://classroom-angel-development.herokuapp.com/api/solutions/id) - retrieve a specific solution

| URL Params | Body | Returns                  |
| ---------- | ---- | ------------------------ |
| N/A        | N/A  | Solution object (return) |

- POST to [https://classroom-angel-development.herokuapp.com/api/solutions/](https://classroom-angel-development.herokuapp.com/api/solutions/) - create an organization

| URL Params | Body                   | Returns                  |
| ---------- | ---------------------- | ------------------------ |
| N/A        | Solution object (send) | Solution object (return) |

```
Solution object (send): {
  "id": integer,
  "name": string,
  "date": string (MM_DD_YY),
  "time": string (HH:MM AM/PM),
  "organizationId": integer
}
```

- PUT to [https://classroom-angel-development.herokuapp.com/api/solutions/id](https://classroom-angel-development.herokuapp.com/api/solutions/id) - update a specific solution

| URL Params | Body                   | Returns                  |
| ---------- | ---------------------- | ------------------------ |
| ID         | Solution object (send) | Solution object (return) |

- DELETE to [https://classroom-angel-development.herokuapp.com/api/solutions/id](https://classroom-angel-development.herokuapp.com/api/solutions/id) - delete a specific solution

| URL Params | Body | Returns                  |
| ---------- | ---- | ------------------------ |
| ID         | N/A  | Solution object (return) |
