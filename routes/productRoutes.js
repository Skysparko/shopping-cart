const Product = require("../models/productModel");

const router = require("express").Router();

//to get all product's data
router.get("/", async (req, res) => {
  try {
    //fetching all data from product db
    const products = await Product.findAll();
    return res.status(200).send(products);
  } catch (error) {
    console.log("<<<<<<", error);
    return res.status(500).json({
      err: error,
    });
  }
});

//to get specific product data
router.get("/:id", async (req, res) => {
  try {
    //fetching only one data where id === the given id
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });

    //checking if the product is in db or not
    if (!product) {
      return res.status(404).send("product not found");
    }

    return res.status(200).send(product);
  } catch (error) {
    console.log("<<<<<<", error);
    return res.status(500).json({
      err: error,
    });
  }
});

//create new product
router.post("/add", async (req, res) => {
  try {
    //getting data from user
    const { name, description, productImage, date, brand, cost } = req.body;

    //checking if any data is missing
    if (!name || !description || !productImage || !date || !brand || !cost) {
      return res.status(404).send("someting is missing bro");
    }

    //creating object of all given data
    const productData = {
      name,
      description,
      productImage,
      date,
      brand,
      cost,
    };
    //saving all the given data into the db
    const productDB = await Product.create(productData);

    return res.status(201).send(productDB);
  } catch (error) {
    console.log("<<<<<<", error);
    return res.status(500).json({
      err: error,
    });
  }
});

//can update existing product's data
router.put("/:id", async (req, res) => {
  try {
    //fetching the product of given id from db
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });

    //checking if the product is in the db or not
    if (!product) {
      return res.status(404).send("product not found");
    }

    //getting updated data from user
    const { name, description, productImage, date, brand, cost } = req.body;

    //creating a object of given data
    const updatedProductData = {
      name,
      description,
      productImage,
      date,
      brand,
      cost,
    };

    //updating data in db through given data
    const updatedProduct = await product.update(updatedProductData);

    return res.status(200).send(updatedProduct);
  } catch (error) {
    console.log("<<<<<<", error);
    return res.status(500).json({
      err: error,
    });
  }
});

//can delete data of the given id's product
router.delete("/:id", async (req, res) => {
  try {
    //fetching the product of given id from db
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });

    //checking if the product is in the db or not
    if (!product) {
      return res.status(404).send("product not found");
    }

    //delete the given id's product
    product.destroy();

    return res.status(200).send("product sucessfully deleted");
  } catch (error) {
    console.log("<<<<<<", error);
    return res.status(500).json({
      err: error,
    });
  }
});

module.exports = router;
