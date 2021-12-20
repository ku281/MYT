const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const venueSchema = new Schema({
    name: { type: String, required: true },
    pitchtype: { type: String, required: true },
    pitchfavour: { type: String, required: true },
    team_batting_first_wins: { type: Number },
    avgscore: { type: Number }
}
)


module.exports = mongoose.model("Venue", venueSchema);