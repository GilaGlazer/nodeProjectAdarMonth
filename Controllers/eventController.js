//ארועים
const eventModel = require('../Models/eventModel');

exports.getEvents = async (req, res) => {
    try {
        const events = await eventModel.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
exports.getEventById = async (req, res) => {
    try {
        const event = await eventModel.findById(req.params.id).populate('producerId');
        if (!event)
            return res.status(404).json({ messege: "event not found" });
        res.json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.postEvent = async (req, res) => {
    try {
        const event = new eventModel(req.body);
        await event.save();
        res.status(201).json({ event });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.putEvent = async (req, res) => {
    try {

        const event = await eventModel.findByIdAndUpdate(
            req.params.id ,
            req.body,
            { new: true }
        );
        if (!event)
            return res.status(404).json({ messege: "Event not found" });
        res.json(event);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.deleteEvent = async (req, res) => {
    try {
        const event = await eventModel.findByIdAndDelete(req.params.id);
        if (!event)
            return res.status(404).json({ messege: "Event not found" });
        res.json({ messege: "Event deleted successfuly" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

