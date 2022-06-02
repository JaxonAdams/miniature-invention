const { Schema, model } = require('mongoose');

const PersonSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        }
    }
);

const Person = model('Person', PersonSchema);

module.exports = Person;