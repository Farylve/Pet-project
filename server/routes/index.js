const {Purchase} = require('../DB/models')

const router = require('express').Router()



router.route('/')
.get(async (req, res) => {

    const purchases = await Purchase.findAll()
    console.log(purchases);
    res.json(purchases)
})


module.exports = router