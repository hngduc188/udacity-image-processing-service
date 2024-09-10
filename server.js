require("dotenv").config()
const express = require('express')
const bodyParser = require('body-parser')
const ErrorHandler = require('./src/utils/error_handler.util')
const cors = require('cors')
const container = require('./src/configs/dependencies/container')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', container.resolve('router').routerApi())


// health check
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(ErrorHandler);

const port = process.env.PORT || '8888';
app.set('port', port);

// Create HTTP server.
app.listen(port, () => console.log(`http://localhost:${port}`));

module.exports = app
