const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        trim: true
    },
    product_price: {
        type: String,
        trim: true
    },
    product_Qty: {
        type: String,
        trim: true
    },
    product_desc: {
        type: String,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    product :{
        type : mongoose.Types.ObjectId,
        ref : "product"
    },
},
    {
        timestamps: true,
        versionKey: false
    });

    const Product = mongoose.model("product",productSchema);
    module.exports=Product;