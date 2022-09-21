const Recipe = require('../models/Recipes')

module.exports = {
    getRecipes: async (req,res)=>{

        try{
            const recipes = await Recipe.find({userId:req.user.id})
            const publicRecipes = await Recipe.find({makePublic:"on"}) //trying to all recipes with the makePublic value of 'on'
            res.render('recipes.ejs', {recipes: recipes, publicRecipes: publicRecipes, user: req.user})
            console.log(req.user) 
        }catch(err){
            console.log(err)
        }
    },
    createRecipe: async (req, res)=>{
        try{
            await Recipe.create({recipeName: req.body.recipeName, userId: req.user.id, category:req.body.category,makePublic: req.body.makePublic, instructions: req.body.instructions})
            console.log('Recipe has been added!')
            res.redirect('/recipes')
        }catch(err){
            console.log(err)
        }
    },
    // deleteRecipe: async (req, res)=>{
    //     console.log(req.body.recipeIdFromJSFile)
    //     try{
    //         await Recipe.findOneAndDelete({_id:req.body.recipeIdFromJSFile})
    //         console.log('Deleted recipe')
    //         res.json('Deleted It')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    showFullRecipe: async (req, res) => {
        try {
            const recipe = await Recipe.findById(req.params.id);
            res.render('fullRecipe.ejs', { recipe: recipe, user: req.user});
            console.log(req.user, recipe)
        } catch (err) {
            console.log(err);
        }
      },
      deleteRecipe: async (req, res) => {
        try {
          // Find recipe by id
          await Recipe.findOneAndDelete({ _id: req.params.id });
          // Delete recipe from db
        //   await Recipe.remove({ _id: req.params.id });
          console.log("Deleted Recipe");
          res.redirect("/recipes");
        } catch (err) {
          res.redirect("/recipes");
        }
      },

}     