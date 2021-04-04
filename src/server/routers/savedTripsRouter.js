const express = require('express');
const router = new express.Router();
let savedTrips = require('../objects/savedTrips');
let id = 0;

/* This router is created to perform Create, Read and Delete operations on the saved trips.

Each operation has a endpoint associated to it*/

//This router request will save the trip and increase the id value with one. This id will act as a key to the savedTrip object key, value pair

router.post('/saveTrip',(req,res)=>{

    if(req.body)
    {
        id += 1;
        const trip = {
            location: req.body.location,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            tripDuration: req.body.tripDuration,
            id
        };
        savedTrips[id] = trip;
        res.send(savedTrips)
    }

})

//This router request will send all the objects present in the saved trip object. If the savedTrip object does not contain any data, it will then return no trips saved.

router.get('/fetchTrip',(req,res)=>{

    if(Object.keys(savedTrips).length>0) //Object.values return the array of keys of saved trips
    {
        res.send(savedTrips);
    }

    else {
        res.send({error:'No trips saved'});
    }

})

/*This router request will delete the object with the id shared in the request.
It will then share the updated savedTrip object. If the id is not found, it will return message as no match found for this id. */

router.delete('/deleteTrip',(req,res)=>{

    let id = req.query.id;
    
    try {

        if(typeof savedTrips[id]==='undefined')
        {
            throw ('No match found');
        }
        
        else {

            delete savedTrips[id];

            if(Object.keys(savedTrips).length>0) //Object.values return the array of keys of saved trips
            {
                res.send(savedTrips);
            }
    
            else {
                res.send({error:'No trips saved'});
                
            }

        }
    }

    catch(e)
    {   
        res.send({error:e});

    }

})


module.exports = router;