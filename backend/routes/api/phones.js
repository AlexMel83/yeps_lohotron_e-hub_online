const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (req, res) => {
    const phones = await loadPhoneCollection();
    res.send(await phones.find({}).sort({ createdAt: -1 }).toArray());
});

router.get('/:id', async (req, res) => {
    const phones = loadPhoneCollection();
    const phone = await phones.findOne({ _id: new mongodb.ObjectId(req.params.id) });

    res.status(200).send(phone);
});

router.post('/', async (req, res) => {
    const phones = await loadPhoneCollection();
    await phones.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });

    res.status(201).send();
});

router.post('/:id', async (req, res) => {
    const phones = await loadPhoneCollection();
    const post = await phones.updateOne(
        { id: new mongodb.ObjectId(req.params.id) },
        { '$set': { text: req.body.text } }
    );

    res.status(200).send();
});

router.delete('/:id', async (req, res) => {
    const phones = await loadPhoneCollection();

    await phones.deleteOne({
        _id: new mongodb.ObjectId(req.params.id)
    });

    res.status(200).send();
});

async function loadPhoneCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://asutpmegatex:4a5CB7XJ1073Qaqa@cluster0.vgwsacm.mongodb.net//mevn', {
    });
    return client.db('mevn').collection('phones');
}

module.exports = router;