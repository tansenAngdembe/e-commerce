const express = require("express")


const router = express.Router();


const {showAllProucts, insertProducts} = require("../controller/routeController")

router.get("/products",showAllProucts)
router.post("/insert",insertProducts)






module.exports = router;