const mongodb = require("../config/mongodb");
const collectionColheitas = "colheita"
const collectionReceitas = "receitas"
const collectionUser = "user"

function pegaTodasColheitas(callback){
    mongodb.connect((err,db) =>{
        db.collection(collectionColheitas).find().toArray(callback);
    });
}
function pegaColheita(id,callback){
    mongodb.connect((err,db) =>{
        db.collection(collectionColheitas).find({_id:require("mongodb").ObjectId(id)}).toArray(callback);
    });
}

function pegaColheitaUsuarioAgricultor(idAgricultor,idUsuario,callback){
    mongodb.connect((err,db)=>{
        db.collection(collectionColheitas).find({$and: [ {id_agricultor:idAgricultor}, {id_autor:idUsuario} ]})
    })
}



function pegaColheitasAgricultor(id,callback){
    mongodb.connect((err,db) =>{
        db.collection(collectionColheitas).find({id_agricultor:id}).toArray(callback);

        // db.collection(collectionColheitas).find({_id:require("mongodb").ObjectId(id)}).toArray(callback);
    });
}


function pegaColheitasUsuario(id,callback){
    mongodb.connect((err,db) =>{
        db.collection(collectionColheitas).find({id_autor:id}).toArray(callback);

        // db.collection(collectionColheitas).find({_id:require("mongodb").ObjectId(id)}).toArray(callback);
    });
}



function insereNovaColheita(callback,dadosColheita){
    mongodb.connect((err,db) => {
        db.collection(collectionColheitas).insert(dadosColheita,(err, res) =>{
            if (err) throw err;
            console.log("Colheita inserida");
           
        });
    });
}

function editaColheita(callback,id,dadosColheita){
    mongodb.connect((err,db) => {
        db.collection(collectionColheitas).updateOne({_id:require("mongodb").ObjectId(id)},dadosColheita,(err, res) =>{
            if (err) throw err;
            console.log("Colheita atualizada");
           
        });
    });
}

function deletaColheita(callback,id){
    mongodb.connect((err,db) => {
        db.collection(collectionColheitas).deleteOne({_id:require("mongodb").ObjectId(id)},(err, res) =>{
            if (err) throw err;
            console.log("Colheita deletada");
            
        });
    });
}


function getAllRecipes(callback){
    mongodb.connect((err,db) => {
        db.collection(collectionReceitas).find().toArray(callback);
        if (err) throw err;
        console.log("Receitas mostrada");
        
    });
}

function getRecipeById(id, callback){
    mongodb.connect((err,db) => {
    db.collection(collectionReceitas).findOne({_id: require("mongodb").ObjectId(id)}, callback);
    if (err) throw err;
    console.log("Receita mostrada");
   
});
}

function insertNewRecipe(r, callback){

    mongodb.connect((err,db) => {
    db.collection(collectionReceitas).insertOne(r, (err, res) => {
        if (err) throw err;
        console.log("receita inserida");
        
    })
});
    
}

function updateRecipe(r, id, callback){

    mongodb.connect((err,db) => {
    db.collection(collectionReceitas).replaceOne({_id:require("mongodb").ObjectId(id)}, r, (err2, res) => {
        if (err2) throw err2;
        console.log("Receita atualizada");
        
    })
})
}

function removeRecipe(id, callback){
    mongodb.connect((err,db) => {
    db.collection(collectionReceitas).deleteOne({_id:require("mongodb").ObjectId(id)},(err2, res) => {
        if (err2) throw err2;
        console.log("Receita deletada");
        
    })
});
}



function getAllUser(callback){
    mongodb.connect((err,db) => {
    db.collection(collectionUser).find().toArray(callback);
    
    })
}

function getUserById(id, callback){
    mongodb.connect((err,db) => {
    db.collection(collectionUser).findOne({_id: require("mongodb").ObjectId(id)}, callback);
    
    });
}

function getLogin(l, s, callback){
    mongodb.connect((err,db) => {
    db.collection(collectionUser).findOne({$and:[{login:l},{senha:s}]}, callback);
    });
}



function disconnect(){
    return mongodb.disconnect();
}


module.exports = {pegaTodasColheitas,pegaColheitasAgricultor,pegaColheitaUsuarioAgricultor,insereNovaColheita,editaColheita,deletaColheita,pegaColheita,pegaColheitasUsuario,
    getAllRecipes, getRecipeById, insertNewRecipe, updateRecipe, removeRecipe,getAllUser, getUserById, getLogin, disconnect}
