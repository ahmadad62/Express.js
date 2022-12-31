const express = require('express');

//send data to the client side 'users' and ''users/new'const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User list');
})

router.get('/new', (req, res) => {
    res.send('User new form');
})


router
    .route("/:id")
    .get((req, res) => {
        res.send(`Get User with ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update User with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User with ID ${req.params.id}`)
    })

module.exports = router;