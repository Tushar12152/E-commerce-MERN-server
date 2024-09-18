const express = require('express');
const app= express()
const morgan = require('morgan')
const port=process.env.port||5001

app.use(morgan('dev'))





app.use('/products', (req,res)=>{
    res.send('all products are here-----------')
})


app.get('/',(req,res)=>{
    res.status(200).send({
        message:'server is okay---'
    })
})

app.listen (port, ()=>{
    console.log(`this server is going on port http://localhost:${port}`)
})