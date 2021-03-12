const express = require('express');
const router = new express.Router();
const savedTrips = require('../objects/savedTrips');

router.post('/saveTrip',(req,res)=>{

    //Save location, datepostman

    if(req.body)
    {
        savedTrips.push(req.body);
        console.log(savedTrips);
        res.send({success:'Trip saved'})
    }


})

router.get('/fetchTrip',(req,res)=>{
    
    if(savedTrips.length>0)
    {
        res.send(savedTrips);
    }
    else {
        res.send({error:'No trips saved'});
    }
})


module.exports = router;