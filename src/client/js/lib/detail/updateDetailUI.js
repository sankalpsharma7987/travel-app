const updateDetailUI = async(weatherData,startDatePickerValue,endDatePickerValue,tripDuration)=>{
    try {
        // Client.clearDetailUI();
        Client.updateWeatherDetail(weatherData,startDatePickerValue,endDatePickerValue,tripDuration);
    }

    catch(e)
    {
        console.log(e); //Instead of rendering on the console, display the message as an error on the index.html
    }

}

module.exports = { updateDetailUI };