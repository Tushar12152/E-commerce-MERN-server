const express = require('express');
const app= express()
const morgan = require('morgan')
const port=process.env.port||5001

app.use(morgan('dev'))



const isLoggedin=(req,res,next)=>{

    const login=false

    if(login){
        next()
    }else{
        return res.status(401).json({message:'invalid user'})
    }

}


app.get("/users", isLoggedin ,(req,res)=>{
    res.send('user profile returned successfully')
})

app.get('/products', (req,res)=>{
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