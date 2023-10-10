const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./db/dbconnection")
const config = require("./config/config");
const routes = require("./routes/v1");
const app = express();
const http = require("http");

/* ------------------------------ ReqBody Data ------------------------------ */

app.use(bodyParser.urlencoded({ extended: false }));

/* -------------------------------- Json Data ------------------------------- */

app.use(bodyParser.json());

/* ------------------------------ DD connection ----------------------------- */

connectDB();

/* --------------------------------- Routes --------------------------------- */

app.use("/v1", routes);

app.use((req, res, next) => {
    next(new Error("Route not found!"));
});

/* ---------------------------- Server Connection --------------------------- */

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log(`server listning port number ${config.port}`);
});
