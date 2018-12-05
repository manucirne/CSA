const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require("./config/mongodb")
const server = require("./server/server")
const api = require("./api/user")
const repository = require("./repository/repository")
const app = express()
const PORT = 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/user", (req, res, next) => {
    repository.getAllUser((err, user) => {
        if(err) return next(err);
        res.json(user);
    });
})

app.get("/user/:id", (req, res, next) => {
    repository.getUserById(req.params.id, (err, user) => {
        if(err) return next(err);
        res.json(user)
    });
})

app.post("/login", (req,res) => {
    console.log(req.body);
    if (!req.body.password) {
        console.log(req.body);
        return res.status(403).json({message: `Missing password!`}) 
    }
    repository.getLogin(req.body.username, req.body.password, (err, user) => {
        if(err) return err;
        console.log('RETRIEVED', user)
        return res.json(user)
    })
})

app.get("/teste", (req,res) => {
    repository.getAllUser((err, user) => {
        if(err) return err;
        return res.json(user)
    });
})

app.listen(PORT, () => {
    console.log('Servidor rodando na porta', PORT)
})
