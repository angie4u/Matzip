const express = require('express');
const router = express.Router();
require('dotenv').config();

const { CosmosClient } = require('@azure/cosmos');
const dbClient = new CosmosClient(process.env.DB_CONNECTION_STRING);
const databaseId = process.env.DB_NAME;
const containerId = process.env.DB_CONTAINER
//TODO :: Update the error status
//TODO :: update other CRUD
//TODO :: ADD VALIDATION


async function getVenues() {
    const querySpec = {
      query: `SELECT v.id, v.name FROM ${containerId} v`
    };
    
    const { resources: results } = await dbClient.database(databaseId).container(containerId).items.query(querySpec).fetchAll();
    console.log(results);
    return results
}

router.get('/', async (req, res) => {
    let result = await getVenues().catch(err => {
        console.error(err);
    });

    res.send(result);
});

router.get('/:id', async (req, res) => {
    const venue = await Venue.findById(req.params.id);

    if (!venue) return res.status(404).send('The venue with the given ID was not found.');

    res.send(venue);
});

router.post('/', async (req, res) => {
    //TODO:: VALIDATION

    // let venue = new Venue({
    //     name: req.body.name,
    //     rating: req.body.rating
    // });    



    // await database.delete();
    // console.log("Deleted database");    


    // venue = await venue.save();

    // res.send('venue');
    res.send({ 'messege': 'data created' });
});

module.exports = router;
