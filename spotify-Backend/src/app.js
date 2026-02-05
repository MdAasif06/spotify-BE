const express=require("express")
const cookirParser=require("cookie-parser")
const authRoute=require("../routes/auth.route.js")
const musicRoute=require("../routes/music.route.js")
const app=express()

app.use(express.json())
app.use(cookirParser())
app.use('/api/auth',authRoute)
app.use("/api/music",musicRoute)
module.exports=app