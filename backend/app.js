import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import Product from "./models/product.model.js";
import productRoute from "./routes/product.route.js"
import ingredientRoute from "./routes/ingredient.route.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(`/products`, productRoute);
app.use(`/ingredient`, ingredientRoute)

app.get(`/`, (req, res) => {
  res.send("Drink");
});

// server start -> nejdrive pripojit db a pak zapnout server
const startServer = async () => {
  try {
    await connectDB();
    console.log("MongoDB connected successfully");
    app.listen(4000, () => {
      console.log(`Server is running on port 4000`);
    });
  } catch (error) {
    console.error("Error connecting to the database", error);
    process.exit(1);
  }
};

startServer();
