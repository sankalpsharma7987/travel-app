const request = require('request');
const apiKey = process.env.WEATHER_BIT_API_KEY;
const forecastUrl = process.env.WEATHER_BIT_FORECAST_URL;
const currentUrl = process.env.WEATHER_BIT_CURRENT_URL;

const mockWeatherBitAPI = ({latitude,longitude},weatherDataType,callback)=>{

    let baseURL = weatherDataType.toLowerCase()==='current'?currentUrl:forecastUrl
   
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

                if(weatherDataType.toLowerCase()==='forecast')
                {
                    callback(undefined,{data,city_name:`${body.city_name},${body.state_code}`});

                }

                
                else{
                    callback(undefined,{data,city_name:`${body.data[0].city_name},${body.data[0].state_code}`});
                }


            }

        }
        catch(e)
        {
            console.log(e);
        }


    })

}

module.exports = mockWeatherBitAPI