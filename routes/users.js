const express = require('express');

//send data to the client side 'users' and ''users/new'const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User list');
})

router.get('/new', (req, res) => {
    res.send('User new form');
})

module.exports = router;