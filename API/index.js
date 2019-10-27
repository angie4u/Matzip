const express = require('express');
const app = express();

const venues = require('./routes/venues');

app.use(express.json());
app.use('/v1/venues', venues);

const port = process.env.port || process.env.PORT || 3000;

app.listen(port, ()=> { console.log(`Listening on port ${port}`)});