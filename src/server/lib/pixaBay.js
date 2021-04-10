const request = require('request');
const apiKey = process.env.PIXA_BAY_API_KEY;
const baseURL = process.env.PIXA_BAY_BASE_URL;

/* Created Library function to send API request to PixaBay API to translate the fetch image details for the address location that user plans to visit
 */

const mockPixaBayAPI = (textValue,callback)=>{
    const url = `${baseURL}?key=${apiKey}&q=${textValue}`;

    const json=true;
    const method='GET';

    request({url,json,method},(error,{body}={})=>{
        
        try{

            if(error){
                callback('Unable to connect to the PixaBay API Services',undefined);
            }
     
            else if(body.total===0)
            {
                callback('Could not fetch image for this location',undefined);
            }
    
            else{
    
                callback(undefined,body.hits);
            }
    

        }
        catch(e)
        {
            callback('Could not fetch image for this location',undefined);
        }

    })

}

module.exports = { mockPixaBayAPI };