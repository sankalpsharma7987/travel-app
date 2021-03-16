const request = require('request');
const apiKey = process.env.WEATHER_BIT_API_KEY;

const mockWeatherBitForecastAPI = ({latitude,longitude},callback)=>{

    let baseURL = process.env.WEATHER_BIT_FORECAST_URL;
   
    const url= `${baseURL}?lat=${latitude}&lon=${longitude}&key=${apiKey}`;

    const json=true;
    const method='GET';

    request({url,json,method},(error,{body}={})=>{
        try {
            if(error)
            {
                callback('Unable to connect to the WEATHER BIT API',undefined);
            }

            else if(!body)
            {
                console.log('Error from WeatherBit API Call');
                callback('Could not fetch data',undefined);
            }
    
            else if (body.error)
            {   
                console.log('Error from WeatherBit API Call');
                console.log(body.error);
                callback(body.error,undefined);
            }

            else {

                let data = [];
                body.data.forEach(dataObj=>data.push(
                    {
                    temp:dataObj.temp,
                    min_temp:Math.round(dataObj.min_temp,0),
                    max_temp:Math.round(dataObj.max_temp,0),
                    snow:Math.round(dataObj.snow,0),
                    weather:dataObj.weather,
                    rh:Math.round(dataObj.rh,0),
                    wind_spd:Math.round(dataObj.wind_spd,0),
                    wind_gust_spd:Math.round(dataObj.wind_gust_spd,0),
                    visibility: Math.round(dataObj.vis,0),
                    valid_date: dataObj.valid_date,
                    precip:Math.round(dataObj.precip,0),
                    clouds:Math.round(dataObj.clouds,0)


                }
                ))

                callback(undefined,{
                    data,cityName:`${body.city_name}`,
                    stateCode: `${body.state_code}`,
                    countryCode: `${body.country_code}`

            });

            }

        }
        catch(e)
        {
            console.log(e);
        }


    })

}


const mockWeatherBitCurrentAPI = ({latitude,longitude},callback)=>{

    let baseURL = process.env.WEATHER_BIT_CURRENT_URL;
   
    const url= `${baseURL}?lat=${latitude}&lon=${longitude}&key=${apiKey}`;

    const json=true;
    const method='GET';

    request({url,json,method},(error,{body}={})=>{
        try {

            if(error)
            {
                callback('Unable to connect to the WEATHER BIT API',undefined);
            }

            else if(!body)
            {
                console.log('Error from WeatherBit API Call');
                callback('Could not fetch data',undefined);
            }
    
            else if (body.error)
            {   
                console.log('Error from WeatherBit API Call');
                console.log(body.error);
                callback(body.error,undefined);
            }

            else {

                const data = {
                    temp: Math.round(body.data[0].temp,0),
                    snow: Math.round(body.data[0].snow,0),
                    weather: body.data[0].weather,
                    rh: Math.round(body.data[0].rh,0),
                    wind_spd: Math.round(body.data[0].wind_spd,0),
                    visibility: Math.round(body.data[0].vis,0),
                    valid_date: body.data[0].datetime.substring(0,10),
                    precip: Math.round(body.data[0].precip,0),
                    clouds: Math.round(body.data[0].clouds,0)

                }

                callback(undefined,{
                    data,cityName:`${body.data[0].city_name}`,
                    stateCode:`${body.data[0].state_code}`,
                    countryCode:`${body.data[0].country_code}`
                });

            }

        }
        catch(e)
        {
            console.log(e);
        }


    })

}

module.exports = { mockWeatherBitForecastAPI, mockWeatherBitCurrentAPI }