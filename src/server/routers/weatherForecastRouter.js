const express = require('express');
const path = require('path');

const {mockWeatherBitForecastAPI,mockWeatherBitCurrentAPI} = require('../lib/weatherBit');
const { mockGeoNameAPI } = require('../lib/geoName');

const router = new express.Router();

router.get('/',(req,res)=>{
    res.sendFile(path.resolve('src/client/views/index.html'))
})

router.get('/forecast',(req,res)=>{

    mockGeoNameAPI(req.query.address,(error,{latitude,longitude}={})=>{

        if(error)
        {
            res.send({error});
        }

        else {
            mockWeatherBitForecastAPI({latitude,longitude},(error,data)=>{
                if(error)
                {
                    res.send({error})
                }

                else {
                    res.send(data);
                }
    
            })

        }
      
    })
    
})
    
router.get('/current',(req,res)=>{

    mockGeoNameAPI(req.query.address,(error,{latitude,longitude}={})=>{

        if(error)
        {
            res.send({error});
        }

        else {
            mockWeatherBitCurrentAPI({latitude,longitude},(error,data)=>{
                if(error)
                {
                    res.send({error})
                }

                else {
                    res.send(data);
                }
    
            })

        }
        
    })
    
})

module.exports = router;