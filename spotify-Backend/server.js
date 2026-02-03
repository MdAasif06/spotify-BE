const app=require("./src/app.js")
require("dotenv").config()
const connecDb=require("./src/config/db.js")
connecDb()

app.listen(3000,()=>{
    console.log(`server is running port 3000`)
})