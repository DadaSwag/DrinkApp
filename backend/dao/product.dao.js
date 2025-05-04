import Product from "../models/product.model.js"

export const getAllProducts = async () => {
    return await Product.find().populate("ingredients.ingredient");
};

export const getProduct = async (id) => {
    return await Product.findById(id).populate("ingredients.ingredient");
};

export const postProduct = async (product) => {
    return await Product.create(product)
};

export const putProduct = async (id, product) => {
    return await Product.findByIdAndUpdate(id, product)
};

export const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id)
};