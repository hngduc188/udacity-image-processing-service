let jwt = require('jsonwebtoken')
const HttpStatus = require('http-status-codes')
const CONSTANTS = require('../constants')
const Utils = require('../utils')
const fs = require('fs')
var publicKEY = fs.readFileSync(`src/keys/public.key`, 'utf8')

const authorization = async (req, res, next) => {
    try {
        let token = req.headers['authorization']
        token = token.split(' ')[1];
        if (token) {
            jwt.verify(token, publicKEY, { algorithms: CONSTANTS.UtilsConst.ENCRYPT_ALGORITHMS }, async (err, payload) => {
                if (err) {
                    // console.log(err)
                    return res.status(HttpStatus.StatusCodes.UNAUTHORIZED).send({ msg: "Token expired" })
                }

                next()
            })
        } else {
            return res.status(HttpStatus.StatusCodes.UNAUTHORIZED).send({ msg: "Token incorrect" })
        }
    } catch (error) {
        console.log(error)
        return res.status(HttpStatus.StatusCodes.UNAUTHORIZED).send({ msg: "Token is required" })
    }
}

module.exports =  authorization
