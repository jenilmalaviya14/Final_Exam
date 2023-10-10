const Joi = require("joi");

const createCart = {
    body: Joi.object().keys({
        Quantity: Joi.number().required().integer(),
        SKU: Joi.number().required().integer(),
        Password: Joi.string().required().trim(),
        Returns: Joi.string().required().trim(),
        order: Joi.string().required().trim(),
    })
};

const listCart = {
    query: Joi.object().keys({
        Quantity: Joi.number().allow("").integer(),
        Product_price: Joi.number().allow("").integer(),
        Password: Joi.string().allow("").trim(),
        Returns: Joi.string().allow("").trim(),
        order: Joi.string().allow("").trim(),
    })
};

module.exports = { createCart, listCart }