//ניתוב למפיקי אירועים
const express = require('express');
const router = express.Router();
const producerController = require('../Controllers/producerController');

router.get('/:email',producerController.getProducerByEmail);
router.post('/',producerController.postProducer);
router.put('/:email',producerController.putProducer);

module.exports = router;