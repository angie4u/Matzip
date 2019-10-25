const express = require('express');
const app = express();
const mongoose = require('mongoose');
const venues = require('./routes/venues');

mongoose.connect('mongodb://localhost/toreta', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));


app.use(express.json());
app.use('/v1/venues', venues);

app.listen(3000, () => console.log('Listening on port 3000...'));

