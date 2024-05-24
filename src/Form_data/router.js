const express = require('express');
const mongoose = require('mongoose');
const User = require('./model');
 // Adjust the path as needed

const router = express.Router();


router.post("/form", async (req, res) => {
    try {
        const { Name, Email, Phonenumber, year, Location, city, state, vehicle,charges } = req.body;

        const newUser = new User.User8({
            Name, Email, Phonenumber, year, Location, city, state, vehicle,charges 
        });

        const createdUser = await newUser.save();

        res.status(201).json({
            status: 1,
            msg: createdUser,
            data: "newdata"
        });
    } catch (error) {
        res.status(400).json({
            status: 0,
            msg: error.message
        });
    }
});

//fetch

router.post("/fetchData", async (req, res) => {
    try {
        const allRooms = await User.Room.find({});

        res.status(200).json({
            status: 1,
            rooms: allRooms,
            rescode: 200
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
