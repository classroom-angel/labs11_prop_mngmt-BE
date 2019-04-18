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
  "amount": integer
}
```

Success object (return): see [https://stripe.com/docs/api/charges/create](https://stripe.com/docs/api/charges/create)

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
  "token_type": string,
  "stripe_publishable_key": string,
  "scope": string,
  "livemode": boolean,
  "stripe_user_id": string,
  "refresh_token": string",
  "access_token": string
}
```
