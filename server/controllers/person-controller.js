const Person = require('../models/Person');

const PersonController = {
    // get all who rsvp'ed
    getAllPersons(req, res) {
        Person.find({}).select('-__v')
        .then(dbPersonData => res.json(dbPersonData))
        .catch(err => res.status(500).json(err));
    },
    // send rsvp info to mongo
    sendPerson({ body }, res) {
        Person.create(body)
        .then(dbPersonData => res.json(dbPersonData))
        .catch(err => res.status(500).json(err));
    }
};

module.exports = PersonController;