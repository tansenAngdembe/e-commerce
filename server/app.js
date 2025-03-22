require("dotenv").config()
const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser")
const path = require("path")

const connection = require("./connection")
const details = require("./router/routes")

const globalErrorController = require("./controller/errorController")

const app = express()
const PORT = process.env.PORT || 5000


//build in middleware
app.use(cors())// to bypass the cors policy;
app.use(body_parser.json())// converting  incoming req into json formate


// using static file
app.use("/static", express.static(path.join(__dirname, "public")))

//router
app.use("/api", details)


app.use(globalErrorController)

const start = async () => {
    try {
         await connection()
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })

    } catch (error) {
        console.log(error)
    }
}
start()
