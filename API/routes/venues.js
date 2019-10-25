const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
const { venue } = require('../models/venues');
const dbClient = require('../index');

//TODO :: Update the error status
//TODO :: update other CRUD
//TODO :: ADD VALIDATION


async function getItem() {
    const databaseId = { id: "matzip2" };
    const containerId = { id: "venues" };
    const itemBody = { "message": "Hello World" };

    const { item } = await dbClient.database(databaseId.id).container(containerId.id).items.create(itemBody);
    console.log("Created item with content: ", itemBody);


    
    const querySpec = {
        query: "SELECT * FROM Families f WHERE  f.lastName = @lastName",
        parameters: [
          {
            name: "@lastName",
            value: "Andersen"
          }
        ]
      };
    
      logStep("Query items in container '" + container.id + "'");
      const { resources: results } = await container.items.query(querySpec).fetchAll();
}




router.get('/', async (req, res) => {
    // const venues = await Venue.find().sort('name');
    helloCosmos().catch(err => {
        console.error(err);
    });

    res.send(venues);
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