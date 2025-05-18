import express from "express"
import cors from "cors"
import "./Config/config.js"
import route from "./routes/route.js"

const app = express()
app.use(express.json())
app.use(cors())

app.use("/plants", route)
app.listen(3000,()=>{
    console.log("listened on 3000");
    
})
