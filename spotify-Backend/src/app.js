const express=require("express")
const cookirParser=require("cookie-parser")
const app=express()

app.use(express.json())

module.exports=app