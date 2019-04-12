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
