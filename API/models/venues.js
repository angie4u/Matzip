const mongoose = require('mongoose');

const Venue = mongoose.model('Venue', new mongoose.Schema({
    //TODO :: appy new data schema once it's defined.
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength:23
    },
    rating: {
        type: Number,
        required: true,
        default: "0.0"
    }
}));

exports.Venue = Venue;