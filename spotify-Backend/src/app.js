const express=require("express")
const cookirParser=require("cookie-parser")
const authRoute=require("../routes/auth.route.js")
const app=express()

app.use(express.json())
app.use(cookirParser())
app.use('/api/auth',authRoute)

module.exports=app