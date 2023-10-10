const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    Quantity: {
        type: Number,
        trim: true
    },
    SKU: {
        type: Number,
        trim: true
    },
    Password: {
        type: String,
        trim: true
    },
    Returns: {
        type: String,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    order :{
        type : mongoose.Types.ObjectId,
        ref : "order"
    },
},
    {
        timestamps: true,
        versionKey: false
    });

const Cart = mongoose.model("cart", CartSchema);
module.exports = Cart;