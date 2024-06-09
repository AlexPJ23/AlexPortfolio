"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var database_service_1 = require("./database.service.cjs");
var server_1 = require("../routes/server.cjs");
var dotenv = require("dotenv");
var app = express();
var allowedOrigins = ['http://localhost:3000', 'http://127.0.0.1:3000']; 
app.use(cors({
    origin: function (origin, callback) {
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));
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
