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

/*testig route
const allowedIps =[""]
  app.get("/", (req,res)=>{
  const clientIP = req.ip || req.socket.remoteAddress;
 if(!allowedIps.includes(clientIP)){
     return res.status(403).json({access_denied: "You are not allowed to access this route"})  }
 res.status(200).send(clientIP);

 }) */

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
