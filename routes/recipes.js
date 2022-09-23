const express = require('express')
const router = express.Router()
const recipesController = require('../controllers/recipes') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, recipesController.getRecipes)

router.get('/:id', ensureAuth, recipesController.showFullRecipe)

router.get('/fullRecipe', recipesController.showFullRecipe)

router.get('/publicRecipes', recipesController.getPublicRecipes) 

router.post('/createRecipe', recipesController.createRecipe)

router.delete('/deleteRecipe/:id', recipesController.deleteRecipe)

module.exports = router