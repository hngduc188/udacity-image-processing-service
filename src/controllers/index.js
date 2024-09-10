const Image = require('./image.controller')
const User = require('./user.controller')



module.exports = class ControllerRepository {
    constructor(opt) {
        this.User = new User(opt)
        this.Image = new Image(opt)
    }
}
