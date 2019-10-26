const express = require('express');
const app = express();

const venues = require('./routes/venues');

app.use(express.json());
app.use('/v1/venues', venues);

const port = parseInt(process.env.PORT || '3000', 10);
app.set('port',port);

app.listen(app.get('port'), function() { console.log(`Listening on port ${app.get('port')}`)});