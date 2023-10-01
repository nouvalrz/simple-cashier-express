
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI
const mongoose = require('mongoose');

const connectMongoDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Terhubung ke MongoDB');
    } catch (error) {
        console.error('Koneksi MongoDB gagal: ' + error);
    }
};

module.exports = connectMongoDB;
