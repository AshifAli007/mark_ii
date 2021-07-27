const express = require('express');
const controller = require('../controllers/eventServices.controller');
const router = express.Router();

router.route('/addEvent').post(controller.addEvent);
router.route('/getEvents').get(controller.getEvents);
router.route('/deleteEvents/:id').delete(controller.deleteEvents);
module.exports = router;