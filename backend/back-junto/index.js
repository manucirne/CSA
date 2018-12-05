require("dotenv-safe").load();
const colheitas = require('./api/colheitas');
const user = require("./api/user");
const receitas = require("./api/receitas");

const server = require("./server/server");
const repository = require("./repository/repository");
 server.start(colheitas,user,receitas, repository, (err, app) => {
console.log("just started");
 });