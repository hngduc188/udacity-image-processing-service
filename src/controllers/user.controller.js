const jwt = require('jsonwebtoken');
const fs = require("fs");

const publicKEY = fs.readFileSync('src/keys/public.key', 'utf8')
const CONSTANTS = require('../constants')

const { RestError, ResponseFormat, Token } = require('../utils')
const fsPromise = require('fs').promises;

class User {
    constructor(opts) {
    }


    getToken = async () => {

        try {
            const token = await Token.createRefreshToken();
            console.log(token);
            return ResponseFormat.formatResponse(200, 'Get Token Successfully', {access_token: token}, 200);
        } catch (error) {
            throw error;
        }
    }

}

module.exports = User
