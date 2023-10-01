require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET
const jwt = require('jsonwebtoken');

const generateJWT = (user) => {
    return jwt.sign(user, JWT_SECRET, { expiresIn: '9999y' });
}

module.exports = {generateJWT}
