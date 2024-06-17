const express = require('express');
const router = express.Router();
const reportcontroller = require('../controllers/report_controller')


router.get('/', reportcontroller);
router.get('/:id', reportcontroller);
router.delete('/:id',  reportcontroller);
router.put('/:id',reportcontroller);
router.post('/', reportcontroller);

module.exports = router;