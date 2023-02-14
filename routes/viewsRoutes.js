const express = require(`express`);
const viewsController = require(`./../controllers/viewsController`);
const authController = require(`./../controllers/authController`);

const router = express.Router();

router.post('/login', authController.login);

router.get('/', viewsController.getOverview);
router.get('/product/:slug', viewsController.getProduct);
router.get('/login', viewsController.getLoginForm);
router.get('/signup', viewsController.getSignUpForm);
router.get('/billing', viewsController.getBillingPage);

router.get('/privacy', viewsController.getPrivacy);

module.exports = router;
