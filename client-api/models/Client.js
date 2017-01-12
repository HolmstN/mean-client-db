var mongoose = require('mongoose');

var ClientSchema = new mongoose.Schema({
    id: Number,
    name: String,
    clientCode: String,
    financial: Boolean,
    clinical: Boolean,
    updated_at: {type: Date, default: Date.now },
});

module.exports = mongoose.model('Client', ClientSchema);