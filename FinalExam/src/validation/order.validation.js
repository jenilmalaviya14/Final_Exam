const Joi = require("joi");

const createOrder = {
    body: Joi.object().keys({
        Product_name: Joi.string().required().trim(),
        Product_price: Joi.number().required().integer(),
        Quntity: Joi.number().required().integer(),
        Order_location: Joi.string().required().trim(),
        Courier: Joi.string().required().trim(),
    })
};

const listOrder = {
    query: Joi.object().keys({
        Product_name: Joi.string().allow("").trim(),
        Product_price: Joi.number().allow("").integer(),
        Quntity: Joi.number().allow("").integer(),
        Order_location: Joi.string().allow("").trim(),
        Courier: Joi.string().allow("").trim(),
    })
};

module.exports = { createOrder, listOrder }