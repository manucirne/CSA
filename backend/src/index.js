require("dotenv-safe").load();
const colheitas = require('./api/colheitas');
const server = require("./server/server");
const repository = require("./repository/repository");
 server.start(colheitas, repository, (err, app) => {
console.log("just started");
 });
