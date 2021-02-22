# BugHound

Bug-Hound is an in-progress, back-end JSON API that allows teams to track issues on certain projects/tasks.

## Architecture
Bug-Hound is built using NodeJS, Express, and MongoDB.  Database modeling and manipulation are achieved using the **mongoose** package.
Routing is modeled using the MVC design pattern where React serves as the 'View' in this example.

## Installation

1. Clone the repository from git.
```bash
git clone 
```
2. Change the .env-example file to your database values.  This file will load variables into the process on start using a package called dotENV.


3. Change your directory into the server and client directories and install dependencies using either NPM or Yarn.  
```bash
// NPM
npm install

// Yarn
yarn
```
4. Run the start command to start the server.
```bash
// NPM
npm start

// Yarn
yarn start
```
## Testing the API

To test the API, you can use either Postman or Insomnia. 

### Registering a User
Passwords are encrypted using the bcrypt package.

**POST /api/v1/users**

```bash
{
    "name": "Evan Wright",
    "email": "evancole@gmail.com",
    "password": "12345"
}
```
This will return a response with a user object and a token.  Add the token to the auth header of your request to use private routes.

### Logging in
**POST /api/v1/auth**

```bash
{
    "email": "evancole@gmail.com",
    "password": "12345"
}
```
This will return a response with a token.  Add the token to the auth header of your request to use private routes.

### Creating a project
Creating a project requires a JWT token. 

**POST /api/v1/project**

```bash
{
    "name": "BugHound Project",
    "company": "Acme Companies"
}
```
This will return a response of the JSON 'Project' object.
```bash
{
    "name": "BugHound Project",
    "company": "Acme Companies",
    "admin": "nj41kn143i409221kmfaml"  // Mongo _id
    "users": [],
    "issues": [
       {
          title: "Persistence Task",
          poster: "nj41kn143i409221kmfaml"  // Mongo _id
       }
    ]
}
```

The rest of the routes are still being tested and will be added after.   If you want to test them yourself, refer to the routes.txt file in the root of the overall project.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)