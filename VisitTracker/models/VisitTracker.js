var mongoose = require('mongoose');
var VisitTrackerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    patientId: String,
    active: Boolean,
    agency: String,
    visit: [{ date: Date, missed: Boolean}]
});
module.exports = mongoose.model('VisitTracker', VisitTrackerSchema);
