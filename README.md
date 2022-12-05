# MyCampus API

This is the GraphQL API used in application called MyCampus.
This README will only cover the topics relevant to the backend such as:

* General info
* Setting MongoDB database
* Getting started
* Example query

## General info

The main purpose of this backend is to store users, events, news and feedback. 
In addition to that this API is also responsible for registering and logging in users and doing the authentication required to make the requests.

## MongoDB database

```
use inno
```

create user
```
db.createUser({user: "your-username", pwd: "your-password", roles: [ { role: "readWrite", db: "inno" }]})
```

## Getting started

* Clone the repository and run npm i in order to install the required packages.
* cd to cloned repository.

create .env
```
DB_URL=mongodb://your-username:your-password@server-address/inno
```

start server

```
nodemon
```

## Query

### Example login query
![This is an login query image](https://users.metropolia.fi/~teemutr/queryimg/loginq.png)

query Query($username: String!, $password: String!) {
  login(username: $username, password: $password) {
  id
  username
  token
  }
}

### Example register query
![This is an register query image](https://users.metropolia.fi/~teemutr/queryimg/regq.png)

mutation Mutation($username: String!, $password: String!) {
  registerUser(username: $username, password: $password) {
  id
  username  
  }
}


* All these below require a bearer token (JWT) to be sent in the "Authorization" header.
* You get token from login response.


### Example feedback query
![This is an user query image](https://users.metropolia.fi/~teemutr/queryimg/feedbackq.png)

query Query {
  feedbacks {
  id
  feedback
  subject
  email
  date 
  }
}
