const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    Product_name: {
        type: String,
        trim: true
    },
    Product_price: {
        type: Number,
        trim: true
    },
    Quntity: {
        type: Number,
        trim: true
    },
    Order_location: {
        type: String,
        trim: true
    },
    Courier: {
        type: String,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    cart :{
        type : mongoose.Types.ObjectId,
        ref : "cart"
    },
},
    {
        timestamps: true,
        versionKey: false
    });

const Order = mongoose.model("order", OrderSchema);
module.exports = Order;