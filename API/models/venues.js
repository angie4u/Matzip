// const mongoose = require('mongoose');

//TODO:: implement schema for cosmos db in model.

// const Venue = mongoose.model('Venue', new mongoose.Schema({
//     //TODO :: appy new data schema once it's defined.
//     name: {
//         type: String,
//         required: true,
//         minlength: 1,
//         maxlength:23
//     },
//     rating: {
//         type: Number,
//         required: true,
//         default: "0.0"
//     }
// }));


const documentDefinition = { id: "hello world doc", content: "Hello World!" };



exports.venue = documentDefinition;