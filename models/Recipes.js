const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  makePublic: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Recipe', RecipeSchema)
