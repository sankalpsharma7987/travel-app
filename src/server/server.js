const express = require('express');
const app = express();
// const cors = require('cors');
const path = require('path');
const {mockWeatherBitForecastAPI,mockWeatherBitCurrentAPI} = require('./lib/weatherBit');
const { mockGeoNameAPI } = require('./lib/geoName');
const { mockPixaBayAPI } = require('./lib/pixaBay');
const { mockMeaningCloudAPI } = require('./lib/meaningCloud');
const { resolveNs } = require('dns');

const port = process.env.PORT;

const publicDirectoryPath = './dist';
const imagePositiveSentiment = [];
const imageNegativeSentiment = [];

app.use(express.static(publicDirectoryPath));
// app.use(cors());

app.get('/',(req,res)=>{
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/forecast',(req,res)=>{

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
    
app.get('/current',(req,res)=>{

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

app.get('/fetchImage',(req,res)=>{

    mockPixaBayAPI(req.query.address,(error,imageData)=>{
            
        if(error)
        {
            res.send({error})
        }

        else 
        {
            let imageFilteredData = [];
            let maxValue = imageData.length>100?100:imageData.length;
            let imageDataSet = imageData.slice(0,maxValue);

            imageDataSet.forEach(image=>imageFilteredData.push({tags:image.tags,id:image.id}))


            mockMeaningCloudAPI(imageFilteredData,(error,sentimentData)=>{

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
                            console.log(image);
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

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})