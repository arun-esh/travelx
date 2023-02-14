const express = require(`express`);
const productController = require(`../controllers/productController`);
const authController = require(`../controllers/authController`);

const router = express.Router();

// get all products route
router.get(`/all`, productController.getAllProducts);

router
  .route(`/`)
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router
  .route(`/:id`)
  .get(productController.getOneProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
