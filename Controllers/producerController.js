//מפיקי אירועים

const Producer = require('../Models/producerModel');

exports.getProducerByEmail = async (req, res) => {
    try {
        const producer = await Producer.findOne({ email: req.params.email });
        if (!producer)
            return res.status(404).json({ messege: "producer not found" });
        res.json(producer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.postProducer = async (req, res) => {
    try {
        // const producer = new Producer({
        //     name: req.body.name,
        //     email: req.body.email,
        //     phone: req.body.phone,
        //     descreption: req.body.descreption,
        // });
        const producer = new Producer(req.body);
        await producer.save();
        console.log(producer);
        
        res.status(201).json({ producer });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.putProducer = async (req, res) => {
    try {

        const producer = await Producer.findOneAndUpdate(
            { email: req.params.email },
            req.body,
            { new: true }
        );
        if (!producer)
            return res.status(404).json({ messege: "producer not found" });
        res.json(producer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}