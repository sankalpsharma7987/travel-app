const updateSummaryUI = async(weatherData)=>{
    try {
        // Client.clearSummaryUI();
        Client.updateWeatherSummary(weatherData.data);
    }

    catch(e)
    {
        // console.log(e); //Instead of rendering on the console, display the message as an error on the index.html
        Client.updateErrorUI();
    }

}

module.exports = { updateSummaryUI };