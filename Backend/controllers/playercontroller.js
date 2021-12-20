const Player = require('../models/player');
const Recent = require('../models/recent');


const createNewPlayer = async (req, res, next) => {
    const { name, dob, batstats, bowl } = req.body;
    let existingPlayer;
    try {
        existingPlayer = await Player.findOne({ name: name, dob: dob });
    } catch (err) {
        console.log(err);
        return next(err);
    }
    if (existingPlayer) {
        console.log("Player exist");
        return next();
    }
    const createdPlayer = new Player({
        name,
        dob,
        batstats,
        bowl
    });

    try {
        await createdPlayer.save();
    } catch (err) {
        const error = "Not able to save ";
        return next(error);
    }
    res.status(201).json({ name: name });
}

const createNewRecent = async (req, res, next) => {
    let { name, recentfantasypoints } = req.body;
    let n = recentfantasypoints.length;
    let avgPoints = 0;
    for (x )
}

exports.createNewPlayer = createNewPlayer;
exports.createNewRecent = createNewRecent;