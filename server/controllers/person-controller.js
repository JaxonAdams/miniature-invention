const Person = require('../models/Person');

const PersonController = {
    // get all who rsvp'ed
    getAllPersons(req, res) {
        Person.find({})
        .then(dbPersonData => res.json(dbPersonData))
    }
};

module.exports = PersonController;