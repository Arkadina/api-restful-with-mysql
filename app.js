const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const app = express();

var router = require("./routes/router");

app.use(express.json());

app.use("/", router);

const port = process.env.PORT || 3000;
app.listen(port, console.log("Server's running."));
