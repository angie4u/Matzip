const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {Venue} = require('../models/venues');

//TODO :: Update the error status
//TODO :: update other CRUD
//TODO :: ADD VALIDATION

router.get('/', async (req, res) => {
    const venues = await Venue.find().sort('name');
    res.send(venues);
});

router.get('/:id', async (req, res) => {
    const venue = await Venue.findById(req.params.id);

    if (!venue) return res.status(404).send('The venue with the given ID was not found.');
    
    res.send(venue);
});

router.post('/', async (req, res) => {
    //TODO:: VALIDATION

    let venue = new Venue({
        name: req.body.name,
        rating: req.body.rating
    });

    venue = await venue.save();
    
    res.send(venue);
});

module.exports = router;