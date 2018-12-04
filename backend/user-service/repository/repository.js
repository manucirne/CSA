
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


var mongoClient = require("mongodb").MongoClient;
mongoClient.connect(url, { useNewUrlParser: true })
            .then(conn => global.conn = conn.db("usuarios"))
            .catch(err => console.log(err))


function getAllUser(callback){
    global.conn.collection("user").find().toArray(callback);
}

function getUserById(id, callback){
    global.conn.collection("user").findOne({_id: require("mongodb").ObjectId(id)}, callback);
}

function getLogin(l, s, callback){
    global.conn.collection("user").findOne({$and:[{login:l},{senha:s}]}, callback);
}

function disconnect(){
    return global.conn.disconnect();
    }

module.exports = {getAllUser, getUserById, getLogin, disconnect}