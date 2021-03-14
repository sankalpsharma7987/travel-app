const updateDetailUI = async(weatherData,datePickerDate)=>{
    try {
        // Client.clearDetailUI();
        Client.updateWeatherDetail(weatherData,datePickerDate);
    }

    catch(e)
    {
        console.log(e); //Instead of rendering on the console, display the message as an error on the index.html
    }

}

module.exports = { updateDetailUI };