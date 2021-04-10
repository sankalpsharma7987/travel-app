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

            //Pull the object that matches the name property with the address value shared by the user
            try{
                let geoName = body.geonames.find(

                    //Verify if the geoName object has any of its name or countryName as part of the address string,shared by the user.
                    
                    geoName=>address.toLowerCase().indexOf(geoName.name.toLowerCase())||address.toLowerCase().indexOf(geoName.countryName.toLowerCase())
                    );

                let latitude = geoName.lat;
                let longitude = geoName.lng;
                let countryName = geoName.countryName;
                
                callback(undefined,{latitude,longitude,countryName});
   
            }
            catch(e)
            {
               callback('Could not fetch results for this location',undefined);
            }
            
        }

    })

}

module.exports = { mockGeoNameAPI }