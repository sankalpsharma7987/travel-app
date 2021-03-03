const updateDetailUI = async(weatherData)=>{
    try {
        // Client.clearDetailUI();
        Client.updateWeatherDetail(weatherData);
    }

    catch(e)
    {
        console.log(e); //Instead of rendering on the console, display the message as an error on the index.html
    }

}

module.exports = { updateDetailUI };