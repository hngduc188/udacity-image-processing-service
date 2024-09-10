const express = require('express')
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

//utils
const { apiHandler } = require('../middleware/handler')


class User {

    constructor(opts) {
        this.ctrl = opts.ctrl
        this.router = express.Router()

        this.router.get('/get-token', jsonParser, apiHandler(this.ctrl.User.getToken))

    }



    getRouter = () => {
        return this.router
    }

}

module.exports = User
