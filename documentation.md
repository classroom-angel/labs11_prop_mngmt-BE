# Classroom Angel Internal API Documentation

- [Organizations](https://github.com/classroom-angel/labs11_prop_mngmt-BE/blob/development/documentation.md#organizations)
- [Users](https://github.com/classroom-angel/labs11_prop_mngmt-BE/blob/development/documentation.md#users)
- [Payment](https://github.com/classroom-angel/labs11_prop_mngmt-BE/blob/development/documentation.md#payment)
- [Teacher Attendance](https://github.com/classroom-angel/labs11_prop_mngmt-BE/blob/development/documentation.md#teacher-attendance)
- [Equipment](https://github.com/classroom-angel/labs11_prop_mngmt-BE/blob/development/documentation.md#equipment)
- [Issues](https://github.com/classroom-angel/labs11_prop_mngmt-BE/blob/development/documentation.md#issues)
- [Tags](https://github.com/classroom-angel/labs11_prop_mngmt-BE/blob/development/documentation.md#tags)
- [Comments](https://github.com/classroom-angel/labs11_prop_mngmt-BE/blob/development/documentation.md#issue-comments)
- [Solutions](https://github.com/classroom-angel/labs11_prop_mngmt-BE/blob/development/documentation.md#solutions)

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
  "id": integer,
  "lastIn": integer,
  "lastOut": integer,
  "totalMinutesMissed": integer,
  "expectedHours": integer
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
  "id": integer,
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

- POST to [https://classroom-angel-development.herokuapp.com/api/organizations/](https://classroom-angel-development.herokuapp.com/api/organizations/) - create an organization

| URL Params | Body                | Returns                |
| ---------- | ------------------- | ---------------------- |
| N/A        | Issue object (send) | Issues object (return) |

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
  "issueId": integer
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
  "time": string (HH:MM AM/PM)
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

## Tags

- GET to [https://classroom-angel-development.herokuapp.com/api/tags/](https://classroom-angel-development.herokuapp.com/api/tags/) - retrieve all tags

| URL Params | Body | Returns                  |
| ---------- | ---- | ------------------------ |
| N/A        | N/A  | All tag objects (return) |

```
Tag object (return): {
  "id": integer,
  "name": string,
  "issueId": integer
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
  "id": integer,
  "name": string
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

## Payment

- GET to [https://classroom-angel-development.herokuapp.com/api/payment](https://classroom-angel-development.herokuapp.com/api/payment) - sanity route for stripe payment

| URL Params | Body | Returns                 |
| ---------- | ---- | ----------------------- |
| N/A        | N/A  | Message object (return) |

```
Message object (return): {
  "message": string,
  "timestamp": string
}
```

- POST to [https://classroom-angel-development.herokuapp.com/api/payment](https://classroom-angel-development.herokuapp.com/api/payment) - adds test payment

| URL Params | Body                  | Returns                 |
| ---------- | --------------------- | ----------------------- |
| N/A        | Payment object (send) | Success object (return) |

```
Payment object (send): {
  "description": string,
  "source": string,
  "currency": string,
  "amount": double
}
```

```
Success object (return): {
  T.B.D.
}
```
