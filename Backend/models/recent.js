const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const recentSchema = new Schema({
    name: { type: String, required: true },
    recentfantasypoints: [{
        team: { type: String },
        points: { type: Number, required: true }
    }],
    avg: { type: Number }
}
)


module.exports = mongoose.model("Recent", recentSchema);