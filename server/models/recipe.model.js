const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: [true, "What is this called?"],
        minLength: [3, "Can you repeat that?"]
    },
    meatsSelected: {
        type: Object, 
        fish: {
            type: "String",
            value: "Fish/Shrimp, "
        },
        steak: {
            type: "String",
            value: "Steak, "
        },
        burger: {
            type: "String",
            value: "Hamburger, "
        },
        chicken: {
            type: "String",
            value: "Chicken, "
        },
        vegetarian: {
            type: "String",
            value: "Vegetarian, "
        },
        pork: {
            type: "String",
            value: "Pork/Sausage, "
        },
    },
    carbsSelected: {
        type: Object,
        noodles: {
            type: "String",
            value: "Noodles, "
        },
        rice: {
            type: "String",
            value: "Rice, "
        },
        tortillas: {
            type: "String",
            value: "Tortillas, "
        },
        potatoes: {
            type: "String",
            value: "Potatoes, "
        },
        fries: {
            type: "String",
            value: "Fries, "
        },
        chips: {
            type: "String",
            value: "Chips, "
        },
    },
    veggiesSelected: {
        type: Object,
        peas: {
            type: "String",
            value: "Peas, "
        },
        broccoli: {
            type: "String",
            value: "Broccoli, "
        },
        greenBeans: {
            type: "String",
            value: "Green Beans, "
        },
        spinach: {
            type: "String",
            value: "Spinach, "
        },
        cauliflower: {
            type: "String",
            value: "Cauliflower, "
        },
        salad: {
            type: "String",
            value: "Salad, "
        },
    }
}, {timestamps: true})


const recipe = mongoose.model("recipe", recipeSchema);


module.exports = recipe;