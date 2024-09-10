const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const fs = require('fs');
const CONSTANTS = require('../constants')
const privateKEY = fs.readFileSync(`./src/keys/private.key`, 'utf8')

function createRefreshToken() {

    var signOptions = {
        expiresIn: CONSTANTS.UtilsConst.JWT_TOKEN_DURATION,    // 10 minute validity
        algorithm: CONSTANTS.UtilsConst.ENCRYPT_ALGORITHMS
    }
    let expiredTime = new Date().getTime() + CONSTANTS.UtilsConst.JWT_TOKEN_DURATION * 1000
    var accessToken = jwt.sign({ expired_time: expiredTime }, privateKEY, signOptions);

    //return refresh token
    return accessToken
}




module.exports = {
    createRefreshToken,
    // createAccessToken,
}
