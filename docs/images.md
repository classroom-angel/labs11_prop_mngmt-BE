## Images

- GET to [https://classroom-angel-development.herokuapp.com/api/images](https://classroom-angel-development.herokuapp.com/api/images) - retrieve all images

| URL Params | Body | Returns                    |
| ---------- | ---- | -------------------------- |
| N/A        | N/A  | All image objects (return) |

```
Image object (return): {
  "id": integer,
  "path": string (name.extension),
  "issueId": integer)
}
```
