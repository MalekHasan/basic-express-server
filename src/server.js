'use strict'
require('dotenv').config();
const cors=require('cors');
const express=require('express');
const app =express();

app.use(cors())
app.use(express.json())
const logger=require("./middlewares/logger")
const validator=require("./middlewares/validator")

const serverError=require("./ error-handlers/500")
const pageNotFoundHandler=require("./ error-handlers/404")
app.use(logger)

app.get('/',(req,res)=>{
    res.status(200).send("hi");
})

app.get('/person',validator,(req,res)=>{
    const {name}=req.query
        res.status(200).send({name});
})


app.use(serverError)
app.use('*',pageNotFoundHandler)

function start(port) {
    app.listen(port,(req,res)=>{
        console.log("server is running")
    })
}
module.exports={
    app:app,
    start:start
}
