const express = require('express');
const app = express();
// const mongoose = require('mongoose');
const { CosmosClient } = require('@azure/cosmos');
const venues = require('./routes/venues');

// set-up cosmos
const endpoint = "https://matzip.documents.azure.com";
// FIXIT:: hide the key
const connectionString = "";
const dbClient = new CosmosClient(connectionString);

exports.dbClient = dbClient;

// const databaseId = { id: "matzip2" };
// const containerId = { id: "venues" };
// const itemBody = { "message": "Hello World"};


// async function helloCosmos() {
//     //FIXIT:: create only if it does not exist.
//     const { database } = await dbClient.databases.createIfNotExists(databaseId);
//     console.log("created database " + databaseId.id);

//     const { container } = await dbClient.database(databaseId.id).containers.createIfNotExists(containerId);
//     const collectionId = { id: "venues" };
//     console.log("created collection " + containerId.id);

//     const { item } = await dbClient.database(databaseId.id).container(containerId.id).items.create(itemBody);
//     console.log("Created item with content: ", itemBody);
// }

// helloCosmos().catch(err => {
//     console.error(err);
// });



        // mongoose.connect('mongodb://localhost/toreta', {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        //     })
        //     .then(() => console.log('Connected to MongoDB...'))
        //     .catch(err => console.error('Could not connect to MongoDB...'));


    app.use(express.json());
    app.use('/v1/venues', venues);

    app.listen(3000, () => console.log('Listening on port 3000...'));