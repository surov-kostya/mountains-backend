const mongoose = require('mongoose');

let articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
    },
    body: {
        type: String,
        required: true
    }
  });

let Article = module.exports = mongoose.model('Article', articleSchema);
