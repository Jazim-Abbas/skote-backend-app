# Skot Application

## 1 _Registration_
##### route:
- the request type is _post_
```sh
/auth/register
```
##### body:
- this is the request body we have to set from the client side
```json
{
    name: string,
    company: string,
    email: string,
    password: string
}
```
##### response payload:
- this is the data or payload this route returns as a response
```json
{
    message: string
}
```