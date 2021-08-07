const express = require('express');
const router = express.Router();
const eventServiceRoutes = require('./server/routes/eventServices.router');
const userServiceRoutes = require('./server/routes/userServices.router');

router.get('/health-check', (req, res) => res.send('OK'));

router.use('/eventService',eventServiceRoutes);
router.use('/userService', userServiceRoutes);

module.exports = router;