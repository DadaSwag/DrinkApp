import { deleteProduct, getAllProducts, getProduct, postProduct, putProduct } from "../dao/product.dao.js";

export const getProductsController = async (req, res) => {

    try {
        const products = await getAllProducts();
        res.json(products);
     } catch (error) {
       res.status(500).json({message: error.message});
     }

}
//export const getProductController = async (req, res) =>{
export const getProductController = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await getProduct(id)
      res.status(200).json(product);

  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

export const postProductController = async (req, res) => {
    try {
      const product = await postProduct(req.body);
      res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

export const putProductController = async (req, res) => {
    try {
      const {id} = req.params;

      const product = await putProduct(id, req.body);

      if (!product) {
        return res.status(404).json({message: "Product not found"});
      }

      const updatedProduct = await getProduct(id);
      res.status(200).json(updatedProduct);

    } catch (error) {
      res.status(500).json({message: error.message});
  }
};


export const deleteProductController = async (req, res) => {
  try {
    const {id} = req.params;

    const product = await deleteProduct(id);

    if (!product) {
      return res.status(404).json({message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

