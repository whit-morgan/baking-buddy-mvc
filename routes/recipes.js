const express = require('express')
const router = express.Router()
const recipesController = require('../controllers/recipes') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, recipesController.getRecipes)

router.get('/fullRecipe/:id', recipesController.showFullRecipe)

router.get('/category/:category', recipesController.getRecipesByCategory)

router.get('/publicRecipes', recipesController.getPublicRecipes) 

router.post('/createRecipe', recipesController.createRecipe)

router.delete('/deleteRecipe/:id', recipesController.deleteRecipe)

router.get('/:id', recipesController.showFullRecipe)

module.exports = router