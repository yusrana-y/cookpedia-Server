const express = require('express')
const recipeController = require('../controllers/recipeController')
const testimonyController = require('../controllers/testimonyController')

const router = new express.Router()


//all-recipes  http://localhost:3000

router.get('/all-recipes',recipeController.getAllRecipesController)

//add-testimony 
router.post('/add-testimony',testimonyController.addTestimonyController)



module.exports = router


