const express = require('express')
const app = express()
const path = require('path')
const {totalFare,rates} = require('./fareUtils')

app.use('/',express.static(path.join(__dirname,"/public")))
app.use(express.json())

app.post('/calculate',(req,res)=>{
    const {km, min} = req.body
    
    const fare = totalFare(km,min)

    res.send({totalFare : fare})
})

app.get('/rates',(req,res)=>{
    res.send(rates)
})

module.exports = app;