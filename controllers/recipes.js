const Recipe = require('../models/Recipes')

module.exports = {
    getRecipes: async (req,res)=>{
        try{
            const recipes = await Recipe.find({userId:req.user.id})
            const publicRecipes = await Recipe.find({makePublic:"on"})
            res.render('recipes.ejs', {recipes: recipes, publicRecipes: publicRecipes, user: req.user})
            console.log(req.user) 
        }catch(err){
            console.log(err)
        }
    },
    getPublicRecipes: async (req,res)=>{
      try{
          const publicRecipes = await Recipe.find({makePublic:"on"})
          res.render('publicRecipes.ejs', {publicRecipes: publicRecipes, user: req.user})
          console.log('public recipes') 
      }catch(err){
          console.log(err)
      }
  },
  getRecipesByCategory: async (req,res)=>{
    try{
        const recipesByCategory = await Recipe.find({category:req.params.category})
        res.render('recipesCategory.ejs', { recipesByCategory: recipesByCategory, user: req.user, category: req.params.category})
        console.log(recipesByCategory, req.user) 
    }catch(err){
        console.log(err)
    }
},
    createRecipe: async (req, res)=>{
      console.log('form submit')
        try{
            await Recipe.create({recipeName: req.body.recipeName, userId: req.user.id, userName: req.user.userName, category:req.body.category,makePublic: req.body.makePublic, instructions: req.body.instructions})
            console.log('Recipe has been added!')
            res.redirect('/recipes')
        }catch(err){
            console.log(err)
        }
    },
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

// getFilteredRecipes: async (req, res) => {
//   try {
//     const category = await Recipe.find(req.params.category)
//     console.log("category is : ",category)

//     const categoryBasedRecipes = results.filter((recipe) => recipe.category === category)
//     console.log("categoryBasedBooks :", categoryBasedBooks )
//   }
// }
// app.get("/api/books/filter", (req, res) => {
//   const category = req.query.category;
//   console.log("category is : ",category)

//   // const categoryBooks = Books.filter((cat) => cat.category === category);
//   let mysql = "SELECT * FROM books ;" 
//   let query = conn.query(mysql, (err, results) => {
//     if (err) throw err;

//     const categoryBasedBooks = results.filter((book)=>book.category===category)
//     console.log("categoryBasedBooks :", categoryBasedBooks )

//     res.send(JSON.stringify({ status: 200, error: null, response: results }));
//   });

// });