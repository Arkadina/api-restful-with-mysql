# API RESTful with mysql

### Fundamentals

-   create, read, update & delete.

### Libraries

express, mysql, nodemon & dotenv.

### Paths

-   Get users: "/users"
-   Get user by id: "/users/:id"
-   Add user: "/add"
-   Delete user: "/delete/:id"
-   Update user: "/update/:id"

### MySQL

You need to create the database and detail how the table will work before you start the server, so execute this in your mysql painel:

CREATE DATABASE _db_; </br>
CREATE TABLE users (id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY, email VARCHAR(25), password VARCHAR(30));

### ENV

Make sure to change your settings before running the server:

-   PORT=3000
-   HOST="localhost"
-   USER="root"
-   PASSWORD="root"
-   DATABASE="db"

### Start server

Execute npm run nodemon.
