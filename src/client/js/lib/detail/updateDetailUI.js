const updateDetailUI = async(weatherData)=>{
    try {
        // Client.clearDetailUI();
        Client.updateWeatherDetail(weatherData.data);
    }

    catch(e)
    {
        console.log(e); //Instead of rendering on the console, display the message as an error on the index.html
    }

}

module.exports = { updateDetailUI };