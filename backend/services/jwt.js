const jwt = require('jsonwebtoken');

const secretKey = 'super secret cred';

function generateJwt(payload) {
    return jwt.sign(payload, secretKey);
}

function verifyJwt(token) {
    return jwt.verify(token, secretKey);
}

module.exports = {
    generateJwt,
    verifyJwt
};
