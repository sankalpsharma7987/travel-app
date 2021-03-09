const express = require('express');

const {mockWeatherBitForecastAPI,mockWeatherBitCurrentAPI} = require('../lib/weatherBit');
const { mockGeoNameAPI } = require('../lib/geoName');
const { mockPixaBayAPI } = require('../lib/pixaBay');
const { mockMeaningCloudAPI } = require('../lib/meaningCloud');

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

router.get('/fetchImage',(req,res)=>{

    mockPixaBayAPI(req.query.address,(error,imageData)=>{
            
        if(error)
        {
            res.send({error})
        }

        else 
        {
            let imageFilteredData = [];
            let maxValue = imageData.length>20?20:imageData.length;
            let imageDataSet = imageData.slice(0,maxValue);

            imageDataSet.forEach(image=>imageFilteredData.push({tags:image.tags,id:image.id}))


            mockMeaningCloudAPI(imageDataSet,(error,sentimentData)=>{

                if(error)
                {
                    res.send(error);
                }

                else {

                    let positiveImageData = [];
                    let str = 'positive';
                    sentimentData.forEach(data=>{
                        if(data.scoreTag.toLowerCase().includes(str))
                        {
                            const image = imageDataSet.find(element=>element.id===data.id)
                            positiveImageData.push(image);

                        }
                    })

                    if(positiveImageData.length==0)
                    {   
                        res.send({error:"Could not find image for this location"});

                    }

                    else
                    {
                        const positiveImage = positiveImageData.reduce((prev,curr)=>prev.downloads>curr.downloads?prev:curr);
                        res.send(positiveImage);
                    }
                    
                }
            })
            
        }
    })

})


module.exports = router;