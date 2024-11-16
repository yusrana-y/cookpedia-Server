const express = require('express')
const recipeController = require('../controllers/recipeController')
const testimonyController = require('../controllers/testimonyController')
const userController = require('../controllers/userController')
const router = new express.Router()


//all-recipes  http://localhost:3000

router.get('/all-recipes',recipeController.getAllRecipesController)

//add-testimony 
router.post('/add-testimony',testimonyController.addTestimonyController)

//register a user
router.post('/register',userController.registerController)

module.exports = router


