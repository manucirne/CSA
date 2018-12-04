const test = require('tape');
const server = require('./server');

function apiMock(app, repo){
}

function runTests(){
    test("Server Start", (t) => {
        server.start(apiMock, null, (err,srv) => {
            t.assert(!err && server, "Server started");
            t.end();
        });
    })

    test("Server Stop", (t) => {
        t.assert(server.stop(), "Server Stopped");
        t.end();
    })
}

module.exports = {runTests}