require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();
require('./config/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// API
const auth = require('./api/auth');
const board = require('./api/board');
const list = require('./api/list');
const card = require('./api/card');

app.use('/api/auth', auth);
app.use('/api/board', board);
app.use('/api/list', list);
app.use('/api/card', card);

// For deployment
app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});