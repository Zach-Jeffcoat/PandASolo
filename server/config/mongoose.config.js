const mongoose = require("mongoose");

const dbName = "recipesDB";
mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log(`You are connected to the database called ${dbName}`)
    })
    .catch((err)=>{
        console.log(`You had a problem connectiing to the ${dbName}. Here is your error:`, err)
    })