const recipes = require('../models/recipeModel')

//getAllRecipes

exports.getAllRecipesController = async(req,res)=>{
    console.log("inside getAll REcipe controller")

    //get all the recipes from mongoDB

    try
    {
        const allRecipes = await recipes.find()
        res.status(200).json(allRecipes)
    }
    catch(err)
    {
        res.status(401).json(err)
    }
}

