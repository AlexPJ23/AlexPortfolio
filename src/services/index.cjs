"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var database_service_1 = require("./database.service.cjs");
var server_1 = require("../routes/server.cjs");
var dotenv = require("dotenv");
var app = express();
dotenv.config();
(0, database_service_1.connectToDatabase)()
    .then(function () {
    app.use('/endeavors', server_1.endeavorsRouter);
    app.listen(process.env.PORT, function () {
        console.log("Server running on port ".concat(process.env.PORT));
    });
})
    .catch(function (error) {
    console.error('Error connecting to database:', error);
    process.exit(1);
});
