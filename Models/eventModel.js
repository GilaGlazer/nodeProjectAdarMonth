//סוג ההפקה
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name:{type:String,required:true},
    descreption:{type:String,required:false},
    date: { type: String, required: true },
    producerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Producer', required: true },
})

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

module.exports = Event;