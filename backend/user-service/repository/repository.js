const mongodb = require("../config/mongodb");

function getAllUser(callback){
    mongodb.connect((err, db) => {
        db.collection("user").find().toArray(callback);
        })
    }

function getUserById(id, callback){
    mongodb.connect((err, db) => {
        db.collection("user").findOne({_id:
        require("mongodb").ObjectId(id)}, callback);
        });
    }


function disconnect(){
    return mongodb.disconnect();
    }

module.exports = {getAllUser, getUserById, disconnect}