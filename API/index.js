const express = require('express');
const app = express();

const venues = require('./routes/venues');

app.use(express.json());
app.use('/v1/venues', venues);

app.listen(3000, () => console.log('Listening on port 3000...'));