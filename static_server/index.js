const express = require('express');
const path = require('path');
const config = require('../src/config.json')

const app = express();

app.use(express.static(path.join(__dirname, './public')));

const port = config.STATIC_SERVER_PORT;
app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})