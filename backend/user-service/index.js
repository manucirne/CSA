const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log('Servidor rodando na porta', PORT)
})
