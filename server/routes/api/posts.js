const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});
// Add Post

// Delete Post

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(
    'mongodb://amsalud:password123@ds117866.mlab.com:17866/postboard',
    {
      useNewUrlParser: true
    }
  );
  return client.db('postboard').collection('posts');
}

module.exports = router;
