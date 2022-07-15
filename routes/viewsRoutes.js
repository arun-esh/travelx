const express = require(`express`);
const viewsController = require(`./../controllers/viewsController`);
// const views = require(`./../views`);

const router = express.Router();

router.get('/product', viewsController.getProduct);
router.get('/', viewsController.getOverview);

module.exports = router;
