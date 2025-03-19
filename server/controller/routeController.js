const asyncErrorhandler = require("../utils/asyncErrorhandler");



const showAllProucts = asyncErrorhandler(async (req,res)=>{
    const someData = [{
        "id": "PROD001",
        "name": "Smartphone X Pro",
        "slug": "smartphone-x-pro",
        "sku": "SP-X-PRO-001",
        "category": {
          "id": "CAT001",
          "name": "Electronics",
          "subCategory": "Smartphones"
        },
        "brand": {
          "id": "BRD001",
          "name": "TechBrand",
          "logo": "https://example.com/brands/techbrand.png"
        },
        "description": {
          "short": "Latest flagship smartphone with advanced features",
          "long": "The Smartphone X Pro features a 6.7-inch AMOLED display, 5G connectivity, and a revolutionary camera system."
        },
    }]
    res.status(200).json({success:true,someData})

})


module.exports = {
    showAllProucts
}
