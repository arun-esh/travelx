const Product = require(`./../models/productModel`);
const catchAsync = require(`./../utils/catchAsync`);

exports.getOverview = catchAsync(async (req, res) => {
  // get the product from the database
  const products = await Product.find();

  res.render('overview', {
    title: 'All Products',
    products,
  });
});

exports.getProduct = catchAsync(async (req, res, next) => {

  const product = await Product.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user'
  });
  res.status(200).render('product', {
    title: 'Product',
    product 
    
  });
});
