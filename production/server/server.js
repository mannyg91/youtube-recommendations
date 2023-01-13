const express = require('express');
const helmet = require('helmet'); // enhances security in Express
const morgan = require('morgan'); // logs all HTTP requests

const app = express();

app.use(helmet()); 
app.use(morgan('tiny')) // 'tiny' condenses logged HTTP requests

app.get('/', (req, res) => {
    res.send('hello world');
})

// Express will run on port 5000 and React will run on 3000
app.listen(5000, () => {
    console.log("Server started on port 5000");
})