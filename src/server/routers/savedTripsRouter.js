const express = require('express');
const router = new express.Router();
let savedTrips = require('../objects/savedTrips');
let id = 0;

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

router.get('/fetchTrip',(req,res)=>{

    
    if(Object.keys(savedTrips).length>0) //Object.values return the array of keys of saved trips
    {
        res.send(savedTrips);
    }
    else {
        res.send({error:'No trips saved'});
    }
})

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