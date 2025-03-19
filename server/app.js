const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser")

const details = require("./router/routes")

const globalErrorController = require("./controller/errorController")

const app = express()
const PORT = process.env.PORT || 5001

//build in middleware
app.use(cors())// to bypass the cors policy;
app.use(body_parser.json())// converting  incoming req into json formate



//router
app.use("/api",details)

app.use(globalErrorController)

const start= ()=>{
    try {
        app.listen(PORT,()=>{
            console.log(`Server started on port ${PORT}`)
        })
        
    } catch (error) {
        console.log(error)
    }
}
start()
