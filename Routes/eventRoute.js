//ניתוב לארוע
const express = require('express');
const router = express.Router();
const eventController = require('../Controllers/eventController');

router.get('/',eventController.getEvents);
router.get('/:id',eventController.getEventById);
router.post('/',eventController.postEvent);
router.put('/:id',eventController.putEvent);
router.delete('/:id',eventController.deleteEvent);

module.exports = router;