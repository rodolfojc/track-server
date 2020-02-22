const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoUri = 'mongodb+srv://rodolfojc:rodolfo@cluster0-eyxy6.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});

mongoose.connection.on('error', (err) => {
    console.log('Error connection to mongo instance', err);
});

app.get('/', (req, res) => {
    res.send('Hi there!!')
});

app.listen(3000, () => {
    console.log('Listen to 3000');
});