const asyncErrorhandler = require("../utils/asyncErrorhandler");
const Products = require("../model/Products")


const showAllProucts = asyncErrorhandler(async (req, res) => {
  const products = await Products.find();
  const totalProducts = await Products.countDocuments();

  res.status(200).json({ success: true, totalProducts, products })

})

const insertProducts = asyncErrorhandler(async (req,res)=>{
  const insert = new Products(req.body);
  await insert.save()
  res.status(200).json({success:true,insert})

})

module.exports = {
  showAllProucts,
  insertProducts
}