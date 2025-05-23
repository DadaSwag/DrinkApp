import mongoose from "mongoose";
import Ingredient from "./ingredient.model.js"

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"],
        },

        ingredients:[
            {
                ingredient:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Ingredient",
                    required: true,

                },
                quantity: {
                    type: Number,
                    required: true,
                    default: 0
                },

            }
        ],

        price: {
            type: Number,
            required: true,
            default: 0
        },

        image: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true
    }
);


const Product = mongoose.model("Product", ProductSchema);

export default Product