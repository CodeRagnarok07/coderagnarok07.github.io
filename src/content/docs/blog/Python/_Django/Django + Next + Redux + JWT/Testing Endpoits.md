# Test endpoints postman (get)

### 1.- register (post)
`http://localhost:8000/api/account/register/`

Headers Conten-Type = application/json
Body => raw
{
    "first_name" : "first_name",
    "last_name" : "last_name",
    "username" : "username",
    "password" : "password*12",
    "re_password" : "password*12"
}

### 2.- view token (post)
`http://localhost:8000/api/token/`
Headers Conten-Type = application/json
Body => raw
{
    "username" : "username",
    "password" : "password*12"
}

### 3.- view token (post)
`http://localhost:8000/api/token/`
Headers Conten-Type = application/json
Body => raw
{
    "username" : "username",
    "password" : "password*12"
}

result
```json
{
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY1MDM4NDYyMiwiaWF0IjoxNjUwMjk4MjIyLCJqdGkiOiI3Y2JkOWE2MWQ4Mzg0ZjRlOWEyYzZiMzdkNWU3YjgwZCIsInVzZXJfaWQiOjF9.Isq9K5XbK7owQLf-IIf0OqKpEyhpMQ2dMzra7t7ewGM",
    "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUwMjk4NTIyLCJpYXQiOjE2NTAyOTgyMjIsImp0aSI6IjQ0YzA5M2Q1NmQ5ZDRiN2ZiZTcyOWY1ZDlkZGZhOGRmIiwidXNlcl9pZCI6MX0.6opZts2WVP5VzkTDzBGgnIk5F58M1MN_EWbuTft5jhI"
}
```

### 4.- refresh token (post)
`http://localhost:8000/api/token/refresh/`
Headers Conten-Type = application/json
Body => raw
```json
{
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY1MDM4NDYyMiwiaWF0IjoxNjUwMjk4MjIyLCJqdGkiOiI3Y2JkOWE2MWQ4Mzg0ZjRlOWEyYzZiMzdkNWU3YjgwZCIsInVzZXJfaWQiOjF9.Isq9K5XbK7owQLf-IIf0OqKpEyhpMQ2dMzra7t7ewGM"
}
```
result
```json
{
    "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUwMjk4Njg1LCJpYXQiOjE2NTAyOTgyMjIsImp0aSI6IjQ3N2U2NDdlM2EzMTQ2NjliNjRkNTU4MzU3M2M0Yzg2IiwidXNlcl9pZCI6MX0.NNTIVnBhcIMcdG-DET3wV-voRIYXIktPSfWwrMYH-BM"
}
```


### 5.- verify token (post)
`http://localhost:8000/api/token/verify/`
Headers Conten-Type = application/json
Body => raw
```json
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUwMjk4Njg1LCJpYXQiOjE2NTAyOTgyMjIsImp0aSI6IjQ3N2U2NDdlM2EzMTQ2NjliNjRkNTU4MzU3M2M0Yzg2IiwidXNlcl9pZCI6MX0.NNTIVnBhcIMcdG-DET3wV-voRIYXIktPSfWwrMYH-BM"
}
```
result
```json
{}
```


### 6.- get user (get)
`http://localhost:8000/api/account/user/`

Headers => Authorization = Bearer + "access"

result
```json
{
    "success": {
        "first_name": "first_name",
        "username": "username"
    }
}
```