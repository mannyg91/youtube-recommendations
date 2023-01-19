const express = require('express');
const helmet = require('helmet'); // enhances security in Express
const morgan = require('morgan'); // logs all HTTP requests
const cors = require("cors"); //for cross-origin resource sharing
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
require("dotenv/config");

const app = express();

app.use(helmet()); 
app.use(morgan('tiny')) // 'tiny' condenses logged HTTP requests


app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: "GET,POST,PUT,DELETE,OPTIONS",
    })
  );

app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('hello world');
// })

let DB = [];

// Express will run on port 5000 and React will run on 3000
app.listen(5000, () => {
    console.log("Server started on port 5000");
})

