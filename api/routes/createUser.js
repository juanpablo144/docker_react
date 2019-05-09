const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post('/', async (req, res) => {
    const { name } = req.body;
        const newUser = new User({ name });
        await newUser.save();
        console.log("usuario registrado");

});

module.exports = router;