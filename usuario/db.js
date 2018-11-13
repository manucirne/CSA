var mongoClient = require('mongodb').MongoClient;
mongoClient.connect('mongodb://localhost/usuario') //Nome da database do CRUDNode
    .then(conn => global.conn = conn.db('usuario'))
    .catch(err => console.log(err));



module.exports = {};