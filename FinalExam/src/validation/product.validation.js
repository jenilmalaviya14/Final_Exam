const Joi = require("joi");

const createProduct = {
    body: Joi.object().keys({
        product_name: Joi.string().required().trim(),
        product_price: Joi.number().required().integer(),
        product_Qty: Joi.number().required().integer(),
        product_desc: Joi.string().required().trim(),
        Courier: Joi.string().required().trim(),
    })
};

const listProduct = {
    query: Joi.object().keys({
        Product_name: Joi.string().allow("").trim(),
        product_price: Joi.number().allow("").integer(),
        product_Qty: Joi.number().allow("").integer(),
        product_desc: Joi.string().allow("").trim(),
        Courier: Joi.string().allow("").trim(),
    })
};

module.exports = { createProduct, listProduct }