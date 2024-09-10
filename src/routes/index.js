const Image = require('./image.route')
const User = require('./user.route')

const express = require('express')
const BASE_API = ''

module.exports = class RouterRepository {
    constructor(opts) {

        this.app = express()
        console.log("Router: ", opts);
        this.Image = new Image(opts)
        this.User = new User(opts)
    }

    routerApi = () => {
        this.app.use(`${BASE_API}/filteredimage`, this.Image.getRouter())
        this.app.use(`${BASE_API}/user`, this.User.getRouter())
        return this.app
    }
}
