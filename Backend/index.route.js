const express = require('express');
const router = express.Router();
const eventServiceRoutes = require('./server/routes/eventServices.router');

router.get('/health-check', (req, res) => res.send('OK'));

router.use('/eventService',eventServiceRoutes);

module.exports = router;