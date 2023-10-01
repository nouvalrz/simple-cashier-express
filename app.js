require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connectMongoDB = require('./db/mongodb')
const routes = require('./routes/routes');

connectMongoDB();

app.use('/api', routes)
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server Started at ${3000}`)
})
