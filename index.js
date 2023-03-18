const express = require('express')
const app = express()
const fs = require('fs')
const cors = require('cors')

app.use(cors())
app.use(express.static('public'))

//FUNCION
class Lottery {
    constructor(id, card) {
        this.id = id;
        this.card = card
    }
}

function createCard(contadorID) {
    let carton = [0]
    while (carton.length < 15) {
        let numRandom = Math.round(Math.random() * 30);
        if (carton.indexOf(numRandom) === -1) {
            carton.push(numRandom)
            console.log(carton)
        }
    }
    arrayCartones[contadorID] = new Lottery(contadorID, carton)
}

function manyCards(num) {
    //Generar 5 al abrirse la pagina
    for (let i = 0; i < num; i++) {
        createCard(contadorID)
        contadorID++
    }
    console.log(arrayCartones)
}

//Genera los primeros 5 cartones
let arrayCartones = []
let contadorID = 0

manyCards(5)

app.get('/products', (req, res) => {
    res.sendFile("index.html")
})

app.get('/5', (req, res) => {
    //Menú principal, primero 5 cartones
    res.json(arrayCartones.slice(0,5))
    res.sendFile("index.html")
})

app.get('/listCard', (req, res) => {
    //Listado los muestra todos
    res.json(arrayCartones)
})

app.post('/create/:num', (req, res) => {
    //Listado los muestra todos
    manyCards(parseInt(req.params.num))
    res.json(arrayCartones)
})

app.listen(3001)
console.log(`Server on port 3001`)

