const express = require('express')
const router = express.Router()
const recipesController = require('../controllers/recipes') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, recipesController.getRecipes)

router.get('/fullRecipe/:id', recipesController.showFullRecipe)

router.get('/category/:category', recipesController.getRecipesByCategory)

router.get('/publiccategory/:category', recipesController.getPublicRecipesByCategory)

router.get('/publicRecipes', recipesController.getPublicRecipes) 

router.get('/favorites', recipesController.getFavorites) 

router.post('/addFavorite', recipesController.addFavorite)

router.post('/createRecipe', recipesController.createRecipe)

router.put('/addFavorite/:id', recipesController.addFavorite)

router.put('/updateRecipe/:id', recipesController.updateRecipe)

router.delete('/deleteRecipe/:id', recipesController.deleteRecipe)

router.get('/:id', recipesController.showFullRecipe)

module.exports = router