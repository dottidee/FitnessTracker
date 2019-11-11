const express = require('express');
const mongoose = require('mongmongoose');

const router = express.Router();

//Get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    const arr = await posts.find({}).toArray();
    //console.log(arr);
    res.send(arr);
});

//Add Posts
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    const newPost = {
        text: req.body.text,
        createdAt: new Date()
    };
    console.log(newPost);

    await posts.insertOne(newPost);
    res.status(201).send();
});

//Delete Posts
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send();
});
//function to connect to posts

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://abc123:Potato!24@cluster0-zne3k.azure.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('Fitness_Posts').collection('posts');
}

module.exports = router;