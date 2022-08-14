const Product = require(`./../models/productModel`);
const catchAsync = require(`./../utils/catchAsync`);

exports.getOverview = catchAsync(async (req, res) => {
  const products = await Product.find(
    {
      name : { $ne: ""},
      summary: { $ne: "" },
      description: { $ne: "" },
      neighborhood_overview: { $ne: "" },
      notes: { $ne: "" },
      transit: { $ne: null },
      access: { $ne: null },
      house_rules: { $ne: null },
      property_type: { $ne: null },
      room_type: { $ne: null },
      bed_type: { $ne: null },
      bathrooms: { $ne: null },
      bedrooms: { $ne: null },
      beds: { $ne: null },
      price: { $ne: null },
      amenities: { $ne: null },
      images: { $ne: null },
      host: { $ne: null },
      host_name: { $ne: null },
      host_image: { $ne: null },
      host_description: { $ne: null },
      host_is_superhost: { $ne: null },
      host_listings_count: { $ne: null },
      host_total_listings_count: { $ne: null },
      host_verifications: { $ne: null },
      host_has_profile_pic: { $ne: null },
      host_identity_verified: { $ne: null },
      street: { $ne: null },
      city: { $ne: null },
      state: { $ne: null },
      zipcode: { $ne: null },
      country: { $ne: null },
      latitude: { $ne: null },
      longitude: { $ne: null },
      is_location_exact: { $ne: null },
      property_type: { $ne: null },
      room_type: { $ne: null },
      bed_type: { $ne: null },
      security_deposit: { $ne:  null },
      cleaning_fee: { $ne:  null },
 
      // conditionals 
      bathrooms: { $gte: 2, $lte: 5 },
      security_deposit: { $gte: 1, $lte: 200 },
      cleaning_fee: { $gte: 0, $lte: 200 },
      }
  );
  res.render('overview', {
    title: 'All Products',
    products
  });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findOne({ _id: req.params.slug });
  res.status(200).render('product', {
    title: 'Product',
    product 
  });
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
