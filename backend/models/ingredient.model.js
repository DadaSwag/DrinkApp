import mongoose from "mongoose";

const IngredientSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter ingredient name"],
        },

        description: {
            type: String,
            required: true,
        },
    }
);


const Ingredient = mongoose.model("Ingredient", IngredientSchema);

export default Ingredient