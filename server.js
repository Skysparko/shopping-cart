const express = require("express");
const app = express();

const productRoutes = require("./routes/productRoutes");
const { connectDB } = require("./config/db");

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use("/api/v1/products", productRoutes);

//server listing on given port
app.listen(4000, () => {
  console.log("Server is live on http://localhost:4000");
  connectDB();
});
