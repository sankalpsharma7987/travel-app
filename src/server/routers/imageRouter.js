const express = require('express');
const { mockMeaningCloudAPI } = require('../lib/meaningCloud');
const { mockPixaBayAPI } = require('../lib/pixaBay');

const router = new express.Router();

router.get('/fetchImage',(req,res)=>{
    try {
        mockPixaBayAPI(req.query.address,(error,imageData)=>{
                
            if(error)
            {
                res.send({error:'Could not find image for this location'})
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
                        let str = 'Negative';
                        sentimentData.forEach(data=>{
                            if(!(data.scoreTag.toLowerCase().includes(str)))
                            {   
                                const image = imageDataSet.find(element=>element.id===data.id)
                                image.scoreTag = data.scoreTag;
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

    }
    catch(e)
    {
        console.log(e);
        res.send({error:'Could not find image for this location'})
    }

})

module.exports = router;