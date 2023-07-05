

const express = require('express')

const server= express()

const cors=require('cors')

const logic = require('./service/logic.js')

// server.use(cors({origin:'http://localhost:3000'}))

server.use(express.json())

server.listen(8080,()=>{
    console.log("server started at port 8000");
})



server.post('/addDatas',(req,res)=>{
    logic.addDatas(req.body.prompt,req.body.Response)
    .then(result =>{
        res.status(result.statusCode).json(result)
    })
})



