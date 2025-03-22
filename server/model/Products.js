const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: {
        short: { type: String, required: true },
        long: { type: String, required: true }
    },
    images: { type: [String], required: true },
    category: { type: String, required: true },
    rating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
    stock: { type: Number },
    colors: { type: [String] },
    features: { type: [String]  },
    specifications: {
        Brand: { type: String },
        Model: { type: String},
        Connectivity: { type: String,},
        BatteryLife: { type: String },
        ChargingTime: { type: String },
        Weight: { type: String },
        Warranty: { type: String }
    }
});

module.exports = mongoose.model("product", productSchema);
