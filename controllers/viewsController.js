const Product = require(`./../models/productModel`);
const catchAsync = require(`./../utils/catchAsync`);

exports.getOverview = catchAsync(async (req, res) => {
  // get the product from the database
  const products = await Product.find({
    bathrooms: { $gte: 1, $lte: 5 },
    security_deposit: { $ne:  null },
    security_deposit: { $gte: 1, $lte: 200 },
    cleaning_fee: { $ne:  null },
    cleaning_fee: { $gte: 0, $lte: 200 },
    });

  res.render('overview', {
    title: 'All Products',
    products,
  });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  console.log("REQUIRED: " + req.params.slug);

  // const product = await Product.findOne({ slug: req.params.slug })
  
  const product = await Product.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user'
  });
  console.log(product);
  res.status(200).render('product', {
    title: 'Product',
    product 

  });

  console.log(product);
});

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};


exports.getSignUpForm = (req, res) => {
  res.status(200).render('signup', {
    title: 'Log into your account'
  });
};

exports.getBillingPage = (req, res) => {
  res.status(200).render('billing', {
    title: 'Billing'
  });
}
