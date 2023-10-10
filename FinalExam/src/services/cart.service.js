const Cart = require("../models/cart")

const createCart = async (reqBody) => {
    return Cart.create(reqBody)
};

const listCart = async () => {
    return Cart.find()
};

const getId = async (id) => {
    return Cart.findById(id).populate({ path: "order", select: "Product_name" })
};

const deleteCart = async (Id) => {
    return Cart.findByIdAndDelete(Id)
};

const updateCart = async (Id, updatebody) => {
    return Cart.findByIdAndUpdate(Id, { $set: updatebody })
};

module.exports = { createCart, listCart, deleteCart, getId, updateCart, }