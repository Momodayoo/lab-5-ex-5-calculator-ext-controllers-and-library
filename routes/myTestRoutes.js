const express = require('express');
const router = express.Router();
router.get('/test', (req, res) => {
    res.send('Hello World! - from my test route/test')
})
router.get('/test2', (req, res) => {
    res.send('Second test from my test route')
})

module.exports = router;