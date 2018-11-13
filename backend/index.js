const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(5000, () => {
    console.log('Servidor rodando na porta', 5000)
})