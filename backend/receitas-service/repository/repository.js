const mongodb = require("../config/mongodb");

const collection = "receitas"

function getAllRecipes(callback){
    mongodb.connect((err, db) => {
        db.collection(collection).find().toArray(callback);
    })
}

function getRecipeById(id, callback){
    mongodb.connect((err, db) => {
        db.collection(collection).findOne({_id: require("mongodb").ObjectId(id)}, callback);
    });
}

function insertNewRecipe(r, callback){
    mongodb.connect((err, db) => {
        db.collection(collection).insertOne(r, (err, res) => {
            if (err) throw err;
            console.log("receita inserida");
            mongodb.disconnect();
        })
    })
    
}

function updateRecipe(r, id, callback){
    mongodb.connect((err1, db) => {
        db.collection(collection).replaceOne({_id:require("mongodb").ObjectId(id)}, r, (err2, res) => {
            if (err2) throw err2;
            console.log("Receita atualizada");
        })
    })
    mongodb.disconnect();
}

function removeRecipe(id, callback){
    mongodb.connect((err, db) => {
        db.collection(collection).deleteOne({_id:require("mongodb").ObjectId(id)},(err2, res) => {
            if (err2) throw err2;
            console.log("Receita deletada");
            mongodb.disconnect();
        })
    })
}

function disconnect(){
    return mongodb.disconnect();
}

module.exports = {getAllRecipes, getRecipeById, insertNewRecipe, updateRecipe, removeRecipe, disconnect}