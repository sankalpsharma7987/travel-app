const express = require('express');
const { mockMeaningCloudAPI } = require('../lib/meaningCloud');
const { mockPixaBayAPI } = require('../lib/pixaBay');

const router = new express.Router();

/* This router fetches image detail from PixaBay API and then sends the first twenty response to the MeaningCloud API to get sentiment score for every set of tag.
It then tries to look for sentiments with negative keyword in it and removes those from its result set. Of those that are left with positive or neutral sentiment scores,
it then looks for the image with the most number of downloads. It then returns that image.
If the result set does not fetch any positive or neutral sentiment score, it then sends no image found for this location message as a response */

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

                //Fetches first twenty images shared by PixaBay resultset. If the resultset is less than 20, it will take all images in its resultset

                let maxValue = imageData.length>20?20:imageData.length;
                let imageDataSet = imageData.slice(0,maxValue);

                imageDataSet.forEach(image=>imageFilteredData.push({tags:image.tags,id:image.id}))

                //The imageDataSet resultset will then be shared to meaning cloud API to tie a sentiment scoreTag to every image, based on the tags received from PixaBay.

                mockMeaningCloudAPI(imageDataSet,(error,sentimentData)=>{

                    if(error)
                    {
                        res.send(error);
                    }

                    else {

                        let positiveImageData = [];
                        let str = 'Negative';
                        sentimentData.forEach(data=>{

                            //This condition will filter images with positive keyword in their sentiment scoreTag.

                            if(!(data.scoreTag.toLowerCase().includes(str)))
                            {   
                                const image = imageDataSet.find(element=>element.id===data.id)
                                image.scoreTag = data.scoreTag;
                                positiveImageData.push(image);

                            }
                        })

                        /*If the image resultset does not fetch any image with the positive or neutral keyword in its sentiment score, the response to the request will then be 
                        sent as could not find image for this location.
                        */
                       
                        if(positiveImageData.length==0)
                        {   
                            res.send({error:"Could not find image for this location"});

                        }

                        else
                        {
                            //Else it will look for the image with the most number of downloads, of the images that have the positive or neutral keyword in its sentiment score

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
        //If an error is observed while fetching the image and mapping a sentiment score to it, an error message of could not find image for this location wil be shared
            
        //The log message is to capture error observed at the server level

        console.log(e); 
        res.send({error:'Could not find image for this location'});

    }

})

module.exports = router;