## Teacher Attendance

- GET to [https://classroom-angel-development.herokuapp.com/api/attendance/](https://classroom-angel-development.herokuapp.com/api/attendance/) - retrieve all attendance records

| URL Params | Body | Returns                         |
| ---------- | ---- | ------------------------------- |
| N/A        | N/A  | All attendance objects (return) |

```
Attendance object (return): {
  "id": integer,
  "lastIn": integer,
  "lastOut": integer,
  "totalMinutesMissed": integer,
  "expectedHours": integer
}
```

- GET to [https://classroom-angel-development.herokuapp.com/api/attendance/id](https://classroom-angel-development.herokuapp.com/api/attendance/id) - retrieve a specific attendance record

| URL Params | Body | Returns                    |
| ---------- | ---- | -------------------------- |
| N/A        | N/A  | Attendance object (return) |

- POST to [https://classroom-angel-development.herokuapp.com/api/attendance/](https://classroom-angel-development.herokuapp.com/api/attendance/) - create attendance record

| URL Params | Body                     | Returns                    |
| ---------- | ------------------------ | -------------------------- |
| N/A        | Attendance object (send) | Attendance object (return) |

```
Attendance object (send): {
  "lastIn": integer,
  "lastOut": integer,
  "totalMinutesMissed": integer,
  "expectedHours": integer (optional)
}
```

- PUT to [https://classroom-angel-development.herokuapp.com/api/attendance/id](https://classroom-angel-development.herokuapp.com/api/attendance/id) - update a specific attendance record

| URL Params | Body                     | Returns                    |
| ---------- | ------------------------ | -------------------------- |
| ID         | Attendance object (send) | Attendance object (return) |

- DELETE to [https://classroom-angel-development.herokuapp.com/api/attendance/id](https://classroom-angel-development.herokuapp.com/api/attendance/id) - delete a specific attendance record

| URL Params | Body | Returns                    |
| ---------- | ---- | -------------------------- |
| ID         | N/A  | Attendance object (return) |
