const express = require('express');
const app = express()
const cors = require('cors');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.port || 5001


// middleWires
const isLoggedin = (req, res, next) => {

    const login = true

    if (login) {
        req.body.id = 105;
        next()
    } else {
        return res.status(401).json({ message: 'invalid user' })
    }

}

app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))
// app.use(isLoggedin) for all apis


app.get("/users", isLoggedin, (req, res) => {
    console.log(req.body.id)

    res.send('user profile returned successfully')
})

app.get('/products', (req, res) => {
    res.send('all products are here-----------')
})


app.get('/', (req, res) => {
    res.status(200).send({
        message: 'server is okay---'
    })
})


//client error handling middlewiew
app.use((req, res, next) => {
    res.status(404).json({ message: "request not found" })
    next()
})


//Server error handling middlewiew
app.use((error, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})



app.listen(port, () => {
    console.log(`this server is going on port http://localhost:${port}`)
})