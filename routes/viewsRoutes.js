const express = require(`express`);
const viewsController = require(`./../controllers/viewsController`);

const router = express.Router();

router.get('/', viewsController.getOverview);
router.get('/product/:slug', viewsController.getProduct);
router.get('/login', viewsController.getLoginForm);
router.get('/signup', viewsController.getSignUpForm);
router.get('/billing', viewsController.getBillingPage);

module.exports = router;
