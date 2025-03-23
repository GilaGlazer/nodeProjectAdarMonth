//סוג ההפקה
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:false},
    date: { type: String, required: true },
    producerEmail: { type: String, required: true },
})

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

module.exports = Event;