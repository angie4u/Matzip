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
    return results;
}

async function getVenue(venueId){
    const querySpec = {
      query: `SELECT * FROM venues v WHERE v.id = "${venueId}"`
    };
    const { resources: results } = await dbClient.database(databaseId).container(containerId).items.query(querySpec).fetchAll();
    return results;
}

async function updateVenue(updatedInfo)
{
    let result = await dbClient.database(databaseId).container(containerId).items.upsert(updatedInfo);
    return result.resource;
}

async function deleteVenue(venueId)
{
    let item = await dbClient.database(databaseId).container(containerId).item(venueId,venueId);
    let result = await item.delete();
    return result;
}

function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

router.get('/', async (req, res) => {
    let result = await getVenues().catch(err => {
        console.error(err);
    });
    res.send(result);
});

router.get('/:id', async (req, res) => {
    let venue = await getVenue(req.params.id)
    if (!venue) 
        return res.status(404).send('The venue with the given ID was not found.');
    res.send(venue);
});

router.put('/:id', async (req, res) => {
    if(isEmptyObject(req.body))
        return res.status(400).send('Bad request.');
    let updatedInfo = await updateVenue(req.body)
    res.send(updatedInfo);
});

// router.post('/', async (req, res) => {
    
//     res.send({ 'messege': 'data created' });
// });

router.delete('/:id', async (req, res) => {
    let result = await deleteVenue(req.params.id)
    if(!result)
        return res.send({ 'message': 'Venue info is successfully deleted.'})    
});


module.exports = router;
