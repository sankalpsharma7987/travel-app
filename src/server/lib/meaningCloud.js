const request = require('request');
const scoreTagArray = require('./scoreTagArray.js');
const apiKey = process.env.MEANING_CLOUD_API_KEY;
const baseURL = process.env.MEANING_CLOUD_BASE_URL;

/* Created Library function to send API request to MeaningCloud API to fetch sentiment score to every set of tag shared by the PixaBay API Response.
    This is an additional API used in this project in order to find sentiments of  the tags, shared along with PixaBay API response object. 
    The function accepts a textArray of pixabay api responses and then sends tag of individual response to meaningCloud API, to fetch the sentiments associated
    with each string of tags. Hence an individual promise is returned for individual requests.
 */

const fetchMeaningCloudData = (textValue)=>{

    const url = `${baseURL}?key=${apiKey}&of=json&txt=${textValue.tags}&lang=en`;
    const json=true;
    const method='GET';

    return new Promise((resolve,reject)=>{
        request({url,json,method},(error,{body})=>{
                if(error){
                    reject(error);
                }
         
                else if (body.status.code==103)
                {
                    reject('Message exceeds maximum limit of 50000 words');
                }
        
                else if (body.status.code==100)
                {
                    reject('Cannot access the MeaningCloud API Service.')
                }
        
                else if(body.status.code==102)
                {
                    reject('Exceeded Maximum number of requests per month');
                }
        
                else{
                    
                    let position = scoreTagArray.findIndex(scoreTag => scoreTag.key === body.score_tag);
                    let scoreTag = position<0?'N/A':scoreTagArray[position].value;
                    resolve({tags:textValue.tags,id:textValue.id,scoreTag});
            
                }
            })

    })

}

const mockMeaningCloudAPI = async (textArray,callback)=>{

    let sentimentArray = [];
    
    try {
        for (let i =0; i<textArray.length;i++)
        {
                 
            let data = await fetchMeaningCloudData(textArray[i]);
            sentimentArray.push(data);
        }
        
        callback(undefined,sentimentArray);
    }

        catch(e)
        {
            callback(e,undefined)
        }

}

module.exports = { mockMeaningCloudAPI };