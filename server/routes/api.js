const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', function(req, res){
  res.send('api works');
});

// Get all posts
router.get('/posts', function(req, res){
  axios.get( API + '/posts')
  .then(function(posts){
  res.status(200).json(posts.data);
}).catch(function(error) {
  res.status(500).send(error)
});
});

module.exports = router;
