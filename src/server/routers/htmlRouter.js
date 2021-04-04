const express = require('express');
const router = new express.Router();

// This router request will send the index.html page

router.get('/',(req,res)=>{

    res.sendFile('index.html')

})

module.exports = router;