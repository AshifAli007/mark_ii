const express = require('express');
const router = express.Router();
const controller = require('../controllers/userServices.controller');

router.route('/sign-up').post(controller.addUser);
router.route('/login').post(controller.login);
router.route('/token').post();
router.route('/logout').post();

module.exports = router;