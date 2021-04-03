# Skot Application

## 1 _Base Application_
##### route:
- all the route will append this base route e.g in case of register the full route will be /api/auth/register
```sh
/api
```
##### response error payload
- all the route will throw errors if founds as a response will have these must properties
```
{
    message: string,
    name: string,
    errors: Array
}
```
- _message_: the actual message of error
- _name_: the name of error e.g Server_ERROR or NOT_FOUND_ERROR etc ..
- _errors_: this is usually occurs when validation fails and the validation errors will catch this array ..

## 2 _Registration_
##### route:
- the request type is _post_
```sh
/auth/register
```
##### body:
- this is the request body we have to set from the client side
```
{
    name: string,
    company: string,
    email: string,
    password: string
}
```
##### response payload:
- this is the data or payload this route returns as a response
```
{
    message: string
}
```

## 3 _Login_
##### route:
- the request type is _post_
```sh
/auth/login
```
##### body:
- this is the request body we have to set from the client side
```
{
    email: string,
    password: string
}
```
##### response payload:
- this is the data or payload this route returns as a response
```
{
    id: string,
    name: string,
    company: string,
    email: string,
    token: long_encrypted_string
}
```