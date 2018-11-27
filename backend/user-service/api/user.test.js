const test = require('tape');
const supertest = require('supertest');
const user = require('./user');
const server = require("../server/server");
const repository = require("../repository/repository");

function runTests(){
    var app = null;
    server.start(user, repository, (err, app) => {
        var id = null;
        var l = "oba";
        var s = "oba";

        test("GET /user", (t) => {
            supertest(app)
            .get("/user")
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err, res) =>{
                if(res.body && res.body.length > 0) id = res.body[0]._id;
                t.error(err, "No Errors");
                t.assert(res.body && res.body.length > 0, "All Users Returned");
                t.end();
            })
        })

        test("GET /user/:id", (t) => {
            if(!id) {
                t.assert(false, "User by Id Returned");
                t.end();
                return
            }

            supertest(app)
            .get("/user/" + id)
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err, res) => {
                t.error(err, "No Errors");
                t.assert(res.body, "Users By Id Returned");
                t.end();
            })
        })

        test("GET /user/:l/:s", (t) => {
            supertest(app)
            .get("/login/" + l + "/" + s)
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err, res) =>{
                t.error(err, "No Errors");
                t.assert(res.body, "Users By Login Returned");
                t.end();
            })
        })

        server.stop();
    })
}

module.exports = {runTests}