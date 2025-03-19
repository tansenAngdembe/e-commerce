const express = require("express")

const router = express.Router();


const {showAllProucts} = require("../controller/routeController")

router.get("/products",showAllProucts)






module.exports = router


