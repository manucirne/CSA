const mongodb = require("../config/mongodb");
const collectionDado = "colheita"



function pegaTodasColheitas(callback){
    mongodb.connect((err,db) =>{
        db.collection(collectionDado).find().toArray(callback);
    });
}
function pegaColheita(id,callback){
    mongodb.connect((err,db) =>{
        db.collection(collectionDado).find({_id:require("mongodb").ObjectId(id)}).toArray(callback);
    });
}

function pegaColheitaUsuarioAgricultor(idAgricultor,idUsuario,callback){
    mongodb.connect((err,db)=>{
        db.collection(collectionDado).find({$and: [ {id_agricultor:idAgricultor}, {id_autor:idUsuario} ]})
    })
}



function pegaColheitasAgricultor(id,callback){
    mongodb.connect((err,db) =>{
        db.collection(collectionDado).find({id_agricultor:id}).toArray(callback);

        // db.collection(collectionDado).find({_id:require("mongodb").ObjectId(id)}).toArray(callback);
    });
}


function pegaColheitasUsuario(id,callback){
    mongodb.connect((err,db) =>{
        db.collection(collectionDado).find({id_autor:id}).toArray(callback);

        // db.collection(collectionDado).find({_id:require("mongodb").ObjectId(id)}).toArray(callback);
    });
}



function insereNovaColheita(dadosColheita,callback){
    mongodb.connect((err,db) => {
        db.collection(collectionDado).insert(dadosColheita,(err, res) =>{
            if (err) throw err;
            console.log("Colheita inserida");
        });
    });
}

function editaColheita(id,dadosColheita,callback){
    mongodb.connect((err,db) => {
        db.collection(collectionDado).updateOne({_id:require("mongodb").ObjectId(id)},dadosColheita,(err, res) =>{
            if (err) throw err;
            console.log("Colheita atualizada");
        });
    });
}

function deletaColheita(id, callback){
    mongodb.connect((err,db) => {
        db.collection(collectionDado).deleteOne({_id:require("mongodb").ObjectId(id)},(err, res) =>{
            if (err) throw err;
            console.log("Colheita deletada");
        });
    });
}

function disconnect(){
    return mongodb.disconnect();
}
module.exports = {pegaTodasColheitas,pegaColheitasAgricultor,pegaColheitaUsuarioAgricultor,insereNovaColheita,editaColheita,deletaColheita,pegaColheita,disconnect,pegaColheitasUsuario }