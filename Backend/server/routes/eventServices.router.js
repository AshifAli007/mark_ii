const express = require('express');
const controller = require('../controllers/eventServices.controller');
const router = express.Router();
const authorizeToken = require('../middlewares/authentication');

router.route('/addEvent').post(authorizeToken, controller.addEvent);
router.route('/getEvents').get(controller.getEvents);
router.route('/getEvent/:id').get(authorizeToken, controller.getEvent);
router.route('/deleteEvent/:id').delete(controller.deleteEvents);
module.exports = router;