const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { 
    res.render('portfolio', { 'variable': 'Anyone' });
});


module.exports = router;