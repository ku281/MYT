const Venue = require('../models/venue');

const createNewVenue = async (req, res, next) => {
    const { name, pitchtype, pitchfavour, team_batting_first_wins, avgscore } = req.body;
    let existingPitch;
    try {
        existingPitch = await Venue.findOne({ name: name })
    } catch (err) {
        return next("Error while loading venue");
    }
    if (existingPitch) {
        return next("Pitch exist update instead")
    }
    const createdVenue = new Venue({
        name,
        pitchtype,
        pitchfavour,
        team_batting_first_wins,
        avgscore
    })
    try {
        await createdVenue.save();
    } catch (err) {
        const error = "Not able to save ";
        return next(error);
    }
    res.status(201).json({
        name,
        pitchtype,
        pitchfavour,
        team_batting_first_wins,
        avgscore
    });

}

exports.createNewVenue = createNewVenue;