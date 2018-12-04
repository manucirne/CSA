const test = require('tape');
const supertest = require('supertest');
const recipes = require('./receitas');
const server = require("../server/server");
const repository = require("../repository/repository");

function runTests(){

    var app = null;
    server.start(recipes, repository, (err, app) => {
        
        var id = null;

        test("GET /recipes", (t) => {
            supertest(app)
            .get('/recipes')
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err, res) => {
                if(res.body && res.body.length > 0) id = res.body[0]._id;
                t.error(err, "No Errors");
                t.assert(res.body && res.body.length > 0, "All Recipes Returned");
                t.end();
            })
        })

        test("GET /recipes/:id", (t) => {
            if(!id) {
                t.assert(false, "User by Id Returned");
                t.end();
                return
            }

            supertest(app)
            .get('/recipes/' + id)
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err, res) => {
                t.error(err, "No Errors");
                t.assert(res.body, "Recipe By Id Returned")
                t.end();
            })
        })

        test("POST /recipes/new", (t) => {
            supertest(app)
            .get('/recipes/new')
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err, res) => {
                t.error(err, "No Errors");
                t.assert(res.body, "Recipe Update");
                t.end();
            })
        })

        test("POST /recipes/update/:id", (t) => {
            if(!id) {
                t.assert(false, "User by Id Returned");
                t.end();
                return
            }

            supertest(app)
            .get('/recipes/update/' + id)
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err, res) => {
                t.error(err, "No Errors");
                t.assert(res.body, "Recipe Update");
                t.end();
            })
        })
        /*
        test("POST /recipes/remove/:id", (t) => {
            if(!id) {
                t.assert(false, "User by Id Returned");
                t.end();
                return
            }

            supertest(app)
            .get('/recipes/update/' + id)
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err, res) =>{
                t.error(err, "No Errors");
                t.assert(res.body, "Recipe Remove"),
                t.end();
            })
        })
        */
    })
}

module.exports = {runTests}