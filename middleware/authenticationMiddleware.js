const jwt = require('jsonwebtoken')
require('dotenv').config();
const User = require('../models/User')

const JWT_SECRET = process.env.JWT_SECRET

const authenticateToken = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, async (err, decodedToken) => {
        if (err) return res.sendStatus(403); // Forbidden

        try {
            const userId = decodedToken.userId;
            req.user = await User.findById(userId);
            next();
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    });
};

module.exports = authenticateToken;
