## Testimonials

- GET to [https://classroom-angel-development.herokuapp.com/api/testimonials/](https://classroom-angel-development.herokuapp.com/api/testimonials/) - retrieve all testimonials

| URL Params | Body | Returns                          |
| ---------- | ---- | -------------------------------- |
| N/A        | N/A  | All testimonial objects (return) |

```
Testimonial object (return): {
  "id": integer,
  "name": string,
  "role": string,
  "text": string
}
```

- POST to [https://classroom-angel-development.herokuapp.com/api/testimonials/](https://classroom-angel-development.herokuapp.com/api/testimonials/) - create testimonial

| URL Params | Body                      | Returns                     |
| ---------- | ------------------------- | --------------------------- |
| N/A        | Testimonial object (send) | Testimonial object (return) |

```
Testimonial object (send): {
  "name": string,
  "role": string,
  "text": string
}
```
