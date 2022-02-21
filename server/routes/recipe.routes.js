const RecipeController = require("../controllers/recipe.controllers");


    module.exports = (app) => {
        app.get("/api/recipes", RecipeController.findAll);
        app.post("/api/recipes", RecipeController.create);
        app.get("/api/recipes/:id", RecipeController.findOne); 
        app.delete("/api/recipes/:id", RecipeController.delete);
        app.put("/api/recipes/:id", RecipeController.update);
    
    
    }