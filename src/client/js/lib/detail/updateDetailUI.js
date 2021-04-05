/*Client-Side Javascript.
This helper function is used to update weather details by sending the weatherdata fetched, the start date and end date and also the trip duration.
If an error is observed during the update, then errorUI is updated with the error message.
*/

const updateDetailUI = async(weatherData,startDatePickerValue,endDatePickerValue,tripDuration)=>{

    try {

        Client.updateWeatherDetail(weatherData,startDatePickerValue,endDatePickerValue,tripDuration);

    }

    catch(e)
    {

        Client.updateErrorUI();

    }

}

module.exports = { updateDetailUI };