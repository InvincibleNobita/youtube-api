const router= require('express').Router();
const controller = require('../controllers/controller'); 
const YoutubeDataModel = require('../models/YoutubeData');

router.get('/', async(req,res) => {
    try{
        const data = await YoutubeDataModel.find()
        res.render("dashboard", { title: "Dashboard", users: data })

    }catch (err) {
        console.log(err)
    }
})

//router.get('/search', controller.searchData)

module.exports = router;