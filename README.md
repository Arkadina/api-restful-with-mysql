# Api rest ful with mysql

### Libraries

> express, mysql, nodemon, dotenv

### Paths

-   Get users: "/users"
-   Get user by id: "/users/:id"
-   Add user: "/add"
-   Delete user: "/delete/:id"
-   Update user: "/update/:id"

### Myslq

> CREATE DATABASE _db_ </br>
> CREATE TABLE users (id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY, email VARCHAR(25), password VARCHAR(30))

### Env

> -   PORT=3000
> -   HOST="localhost"
> -   USER="root"
> -   PASSWORD="root"
> -   DATABASE="db"

### Start server

> npm run nodemon
