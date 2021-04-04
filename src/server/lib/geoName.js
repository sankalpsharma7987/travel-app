const request = require('request');
const apiKey = process.env.GEONAME_API_KEY;
const baseURL = process.env.GEONAME_BASE_URL;

/* Created Library function to send API request to GeonName API to translate the address to latitude and longitude */

const mockGeoNameAPI = (address,callback)=>{

    const url= `${baseURL}?q=${encodeURIComponent(address)}&username=${apiKey}`;
    const json=true;
    const method='GET';

    request({url,json,method},(error,{body}={})=>{
        if(error)
        {
            callback('Unable to connect to the GEONAME API',undefined);
        }

        else if (body.status)
        {
            console.log('Error from GeoName API Call');
            console.log(body.status);
            callback(body.status,undefined);
        }
        else if(body.totalResultsCount===0)
        {
            console.log('Error from GeoName API Call');
            callback('Could not fetch results for this location',undefined);
        }
        else {
            let latitude = body.geonames[0].lat;
            let longitude = body.geonames[0].lng;
            callback(undefined,{latitude,longitude});
        }

    })

}

module.exports = { mockGeoNameAPI }