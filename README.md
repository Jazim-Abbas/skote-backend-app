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

---

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

---

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

---

## 4 _Forget Password_

##### route:

- the request type is _post_

```sh
/auth/password-forget
```

##### body:

- this is the request body we have to set from the client side

```
{
    email: string,
}
```

##### response payload:

- this is the data or payload this route returns as a response

```
{
    message: string
}
```

---

## 5 _About_

##### routes:

```sh
/about: get
/about: post
/about/:id: patch
/about/:id: delete
```

#### /about:

- the requset type is post

##### body

```
{
    name: string,
    role: string
}
```

##### response payload:

```
{
    about: {
        name: string,
        role: string,
        _id: string
    }
}
```

#### /about/:id:

- the requset type is patch

##### params

```
{
    id: string
}
```

##### body

```
{
    name: string,
    role: string
}
```

##### response payload:

```
{
    about: {
        name: string,
        role: string,
        _id: string
    }
}
```

#### /about

- the requset type is get

##### response payload:

```
{
    about: {
        name: string,
        role: string,
        _id: string
    }
}
```

#### /about/:id:

- the requset type is delete

##### params

```
{
    id: string
}
```

##### response payload:

```
{
    message: string
}
```

---

## 6 _CompanyDetail_

##### routes:

```sh
/company: get
/company: post
/company/:id: patch
/company/:id: delete
```

#### /company:

- the requset type is post

##### body

```
{
    logo: file (but currenlty this is string),
    bus_name: string,
    bus_email: string,
    bus_phone: string,
    bus_address: string,
    website_link: string
}
```

##### response payload:

```
{
    companny: {
        logo: file (but currenlty this is string),
        bus_name: string,
        bus_email: string,
        bus_phone: string,
        bus_address: string,
        website_link: string,
        _id: string
    }
}
```

#### /company/:id:

- the requset type is patch

##### params

```
{
    id: string
}
```

##### body

```
{
    logo: file (but currenlty this is string),
    bus_name: string,
    bus_email: string,
    bus_phone: string,
    bus_address: string,
    website_link: string
}
```

##### response payload:

```
{
    companny: {
        logo: file (but currenlty this is string),
        bus_name: string,
        bus_email: string,
        bus_phone: string,
        bus_address: string,
        website_link: string,
        _id: string
    }
}
```

#### /company

- the requset type is get

##### response payload:

```
{
   companny: {
        logo: file (but currenlty this is string),
        bus_name: string,
        bus_email: string,
        bus_phone: string,
        bus_address: string,
        website_link: string,
        _id: string
    }
}
```

#### /company/:id:

- the requset type is delete

##### params

```
{
    id: string
}
```

##### response payload:

```
{
    message: string
}
```

---

## 6 _Business Information_

### _Root Path_

```sh
/business
```

### 1 - _Introduction_

##### routes:

```sh
/introduction: get
/introduction: post
/introduction/:id: patch
/introduction/:id: delete
```

#### /introduction:

- the requset type is post

##### body

```
{
    bus_short_desc: string,
    company_do: string,
    products: Array[string],
}
```

##### response payload:

```
{
    introduction: {
        bus_short_desc: string,
        company_do: string,
        products: Array[string],
        _id: string
    }
}
```

#### /introduction/:id:

- the requset type is patch

##### params

```
{
    id: string
}
```

##### body

```
{
    bus_short_desc: string,
    company_do: string,
    products: Array[string],
}
```

##### response payload:

```
{
    introduction: {
        bus_short_desc: string,
        company_do: string,
        products: Array[string],
        _id: string
    }
}
```

#### /introduction

- the requset type is get

##### response payload:

```
{
   introduction: {
        bus_short_desc: string,
        company_do: string,
        products: Array[string],
        _id: string
    }
}
```

#### /introduction/:id:

- the requset type is delete

##### params

```
{
    id: string
}
```

##### response payload:

```
{
    message: string
}
```

---

### 2 - _Unique Selling Point_

##### routes:

```sh
/usp: get
/usp: post
/usp/:id: patch
/usp/:id: delete
```

#### /usp:

- the requset type is post

##### body

```
{
    description: string,
    strength: string,
    reason_to_choose: string,
}
```

##### response payload:

```
{
    usp: {
        description: string,
        strength: string,
        reason_to_choose: string,
        _id: string
    }
}
```

#### /usp/:id:

- the requset type is patch

##### params

```
{
    id: string
}
```

##### body

```
{
    description: string,
    strength: string,
    reason_to_choose: string,
}
```

##### response payload:

```
{
    usp: {
        description: string,
        strength: string,
        reason_to_choose: string,
        _id: string
    }
}
```

#### /usp

- the requset type is get

##### response payload:

```
{
   usp: {
        description: string,
        strength: string,
        reason_to_choose: string,
        _id: string
    }
}
```

#### /usp/:id:

- the requset type is delete

##### params

```
{
    id: string
}
```

##### response payload:

```
{
    message: string
}
```

---

### 3 - _Target Market_

##### routes:

```sh
/market: get
/market: post
/market/:id: patch
/market/:id: delete
```

#### /market:

- the requset type is post

##### body

```
{
    niche_market: string,
    target_audience: string,
}
```

##### response payload:

```
{
    targetMarket: {
        niche_market: string,
        target_audience: string,
        _id: string
    }
}
```

#### /market/:id:

- the requset type is patch

##### params

```
{
    id: string
}
```

##### body

```
{
    niche_market: string,
    target_audience: string,
}
```

##### response payload:

```
{
    targetMarket: {
        niche_market: string,
        target_audience: string,
        _id: string
    }
}
```

#### /market

- the requset type is get

##### response payload:

```
{
   targetMarket: {
        niche_market: string,
        target_audience: string,
        _id: string
    }
}
```

#### /market/:id:

- the requset type is delete

##### params

```
{
    id: string
}
```

##### response payload:

```
{
    message: string
}
```

---


### 4 - _Competitor_

##### routes:

```sh
/competitor: get
/competitor: post
/competitor/:id: patch
/competitor/:id: delete
```

#### /competitor:

- the requset type is post

##### body

```
{
    description: string,
    web_addresses: Array[string],
}
```

##### response payload:

```
{
    competitor: {
        description: string,
        web_addresses: Array[string],
        _id: string
    }
}
```

#### /competitor/:id:

- the requset type is patch

##### params

```
{
    id: string
}
```

##### body

```
{
    description: string,
    web_addresses: Array[string],
}
```

##### response payload:

```
{
    competitor: {
        description: string,
        web_addresses: Array[string],
        _id: string
    }
}
```

#### /market

- the requset type is get

##### response payload:

```
{
   competitor: {
        description: string,
        web_addresses: Array[string],
        _id: string
    }
}
```

#### /market/:id:

- the requset type is delete

##### params

```
{
    id: string
}
```

##### response payload:

```
{
    message: string
}
```

---

