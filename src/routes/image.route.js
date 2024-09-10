const express = require('express')
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

//middleware
const TokenAuthenticate = require('../middleware/authenticate')

//utils
const { apiHandler } = require('../middleware/handler')


class Image {

    constructor(opts) {
        this.ctrl = opts.ctrl
        this.router = express.Router()

        this.router.get('/', jsonParser, TokenAuthenticate, apiHandler(this.ctrl.Image.filteredImage))
        this.router.delete('/deleteimage', TokenAuthenticate, apiHandler(this.ctrl.Image.deleteAll))
    }



    getRouter = () => {
        return this.router
    }

}

module.exports = Image
