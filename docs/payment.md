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
  T.B.D. (payment details)
}
```

- POST to [https://classroom-angel-development.herokuapp.com/api/payment/connect](https://classroom-angel-development.herokuapp.com/api/payment/connect) - connects contractor's stripe account

| URL Params | Body                  | Returns                         |
| ---------- | --------------------- | ------------------------------- |
| N/A        | Connect object (send) | Connect details object (return) |

```
Connect object (send): {
  "code": string
}
```

```
Connect details object (return): {
  "refresh_token": string,
  "stripe_user_id": integer(?)
}
```
