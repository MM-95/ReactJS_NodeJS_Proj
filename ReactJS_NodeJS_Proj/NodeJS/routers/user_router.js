const express = require('express')
const router = express.Router()
const {Users} = require('../models')


router.get("/", (req, res) => {
    const listofUsers = Users.findAll();
    res.json(listofUsers);
})

router.post("/", async(req, res) => {
    const post = req.body;
    console.log(post);
    await Users.create(post);
    res.json(post);
});
module.exports = router;