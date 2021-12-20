const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();
const playerRoutes = require('./routes/playerroutes')
app.use(bodyParser.json());

app.use("/api/player", playerRoutes);

mongoose
    .connect(
        `mongodb+srv://himanshu20:xtreme20@cluster0.dumxb.mongodb.net/myt?retryWrites=true&w=majority`
    )
    .then(() => {
        app.listen(5000);
    })
    .catch(err => {
        console.log(err);
    });