const apiKey = process.env.PIXA_BAY_API_KEY;
const request = require('request');
const baseURL = process.env.PIXA_BAY_BASE_URL;

const mockPixaBayAPI = (textValue,callback)=>{
    const url = `${baseURL}?key=${apiKey}&q=${textValue}`;

    const json=true;
    const method='GET';

    request({url,json,method},(error,{body}={})=>{
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

    })
    }

module.exports = { mockPixaBayAPI };