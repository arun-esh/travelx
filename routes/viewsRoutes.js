const express = require(`express`);
const viewsController = require(`./../controllers/viewsController`);
// const views = require(`./../views`);

const router = express.Router();

// router.get('/', viewsController.getOverview);
router.get('/', viewsController.mainPage);
router.get('/product/:slug', viewsController.getProduct);

module.exports = router;
