var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var _ = require('lodash');

// define the schema for our Award model
var AwardSchema = mongoose.Schema({

    title: {type: String},
    description: {type: String},

    date: {type: Date},

    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
    staff: [{ type: Schema.Types.ObjectId, ref: 'Staff' }],
}, {
    timestamps: true
});

// create the model for Awards and expose it to our app
module.exports = mongoose.model('Award', AwardSchema);