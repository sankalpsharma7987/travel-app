const express = require('express');

const {mockWeatherBitForecastAPI,mockWeatherBitCurrentAPI} = require('../lib/weatherBit');
const { mockGeoNameAPI } = require('../lib/geoName');

const router = new express.Router();


/*This router request will send the forecast of the query address shared. 
The GeoName will be first translated and the latitude and longitude will be then shared to weatherBit API to retrieve the forecast*/

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

/*This router request will send the request of the query address to find current weather details
The GeoName will be first translated and the latitude and longitude will be then shared to weatherBit API to retrieve the current weather details*/

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