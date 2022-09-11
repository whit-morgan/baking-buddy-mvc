const Recipe = require('../models/Recipes')

module.exports = {
    getRecipes: async (req,res)=>{
        console.log(req.user)
        try{
            const recipes = await Recipe.find({userId:req.user.id})
            
            res.render('recipes.ejs', {recipes: recipes,})
            console.log(recipes)
        }catch(err){
            console.log(err)
        }
    },
    createRecipe: async (req, res)=>{
        try{
            await Recipe.create({recipeName: req.body.recipeName, userId: req.user.id, category:req.body.category,public: req.body.makePublic, instructions: req.body.instructions})
            console.log('Recipe has been added!')
            res.redirect('/recipes')
        }catch(err){
            console.log(err)
        }
    },
    deleteRecipe: async (req, res)=>{
        console.log(req.body.recipeIdFromJSFile)
        try{
            await Recipe.findOneAndDelete({_id:req.body.recipeIdFromJSFile})
            console.log('Deleted recipe')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
    showFullRecipe: async (req, res) => {
        console.log(req.user)
        try {
            const recipe = await Recipe.findById(req.params.id);
            res.render('fullRecipe.ejs', { recipe: recipe, user: req.user});
        } catch (err) {
            console.log(err);
        }
      },

}     