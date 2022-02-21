const Recipe = require('../models/Recipe.model');

module.exports = {

    findAll: (req, res) =>{
        Recipe.find()
            .then((allRecipes)=>{
                console.log(allRecipes);
                res.json(allRecipes);
            })
            .catch((err)=>{
                console.log("Find All Recipes failed");
                res.json({message: "Something went wrong in findAll", error: err})
            })
    },

    create: (req, res)=>{
        Recipe.create(req.body)
            .then((newRecipe)=>{
                console.log("Printing this now...")
                console.log(req.body);
                console.log(newRecipe);
                res.json(newRecipe)
            })
            .catch((err)=>{
                console.log("Something went wrong in create");
                res.status(400).json(err);
            })
    },

    findOne: (req, res)=>{
        Recipe.findOne({_id: req.params.id})
            .then((oneRecipe)=>{
                console.log(oneRecipe);
                res.json(oneRecipe)
            })
            .catch((err)=>{
                console.log("Find One Recipe failed");
                res.json({message: "Something went wrong in findOne", error: err})
            })
    },

    delete: (req, res)=>{
        console.log(req.params.id);
        Recipe.deleteOne({_id: req.params.id})
            .then((deletedRecipe)=>{
                console.log(deletedRecipe);
                res.json(deletedRecipe)
            })
            .catch((err)=>{
                console.log("Delete One Recipe failed");
                res.json({message: "Something went wrong in delete", error: err})
            })
    },

    update: (req, res)=>{
        Recipe.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true} 
            )
            .then((updatedRecipe)=>{
                console.log(updatedRecipe);
                res.json(updatedRecipe)
            })
            .catch((err)=>{
                console.log("Something went wrong in update");
                res.status(400).json(err); //See above
            })
    }

}

