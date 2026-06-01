// console.log("Hello!");

const express = require('express')
const app=express()

app.listen(3001,()=>{
    console.log("successfully connected on port 3000!")
})

app.get('/',(req,res)=>{
    res.send("hello,world!")
})
