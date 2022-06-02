const router = require('express').Router();
const { getAllPersons, sendPerson } = require('../controllers/person-controller');

router.route('/api/').get(getAllPersons).post(sendPerson);

module.exports = router;