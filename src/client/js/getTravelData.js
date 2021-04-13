const $INPUT_ELEMENT = document.querySelector('#destination');
const $SUBMIT_BUTTON = document.querySelector('#submit-button');
const $DATE_ELEMENT = document.querySelector('#date-picker');
const $END_DATE_ELEMENT = document.querySelector('#end-date-picker');


/* Client side JavaScript code that will run when the Plan My Trip button is clicked to fetch weather details and location image.
The start date and end date are picked from the from and to datepickers. The countdown before the start of the trip is calcluated.
If the trip countdown is within 7 days, only current weather will be pulled. Else summary of the 15 day forecast will also be fetched.
The location will also be send as a query string to fetch image of the location. Until the image is fetched and not returned by the API call, the spinning image will be rendered.
If the location image is not found, the countryCode variable will be used to pull the flag image of the country to which the destination belongs.
This image will be used instead of the image of the location.
Elements of the weather detail, image location and summary section will be cleared before every API call to fetch and render new request.
If error is observed, the errorUI elements will be updated.
*/

const getTravelData = async()=> {

    let countryCode = '';
    $SUBMIT_BUTTON.setAttribute('disabled',true);
    Client.clearErrorUI();
    const inputValue = $INPUT_ELEMENT.value;
    const startDatePickerValue = $DATE_ELEMENT.value;
    const endDatePickerValue = $END_DATE_ELEMENT.value;
    
    // Clears form UI Element.

    Client.clearUI();


    
    //The destination string is validated to ensure the input value of the destination is not empty

    if(Client.validateDestinationInput(inputValue))
    {
        // Client.toggleSubmitButton(true);

        Client.clearSummaryUI();
        Client.clearDetailUI();
        Client.clearLocationImageUI();
        
        const dateVal = new Date();


        //dayDiff gives the countdown of the number of days left before the trip.

        let dayDiff = Client.calculateDateDiffDays(dateVal.toString(),startDatePickerValue)

        //tripDuration gives duration of trip

        let tripDuration = Client.calculateDateDiffDays(startDatePickerValue,endDatePickerValue)

        //Based on the value of dayDiff, the weatherDataType is selected.

        let weatherDataType = dayDiff>=6?'forecast':'current'

        /*If the weatherDataType is forecast, then the current weather as well as the 15 day forecast of the weather, for the destination, is fetched.
        The weather summary section would be displayed using showWeatherSummary function.
        */
        Client.updateLocationImageUI({webformatURL:'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'});
        if(weatherDataType==='forecast')
        {
            Client.showWeatherSummary(true);

            try {
                const weatherSummaryData = await Client.fetchTravelWeatherSummaryData(inputValue);
                await Client.updateWeatherSummaryUI(weatherSummaryData);

                const weatherDetailData = await Client.fetchTravelWeatherDetailData(inputValue);
                await Client.updateDetailUI(weatherDetailData,startDatePickerValue,endDatePickerValue,tripDuration);
                countryCode = weatherDetailData.countryCode;

                const imageData = await Client.fetchLocationImage(inputValue);
                if(imageData.error === 'Could not find image for this location')
                {
                    if(countryCode)
                    {
                        const flagData = await Client.fetchCountryImage(countryCode);
                        await Client.updateLocationImageUI({webformatURL:flagData});
                    }
                    else {
                        Client.updateErrorUI();
                        Client.clearLocationImageUI();
                    }
                }
                
                else {
                    await Client.updateLocationImageUI(imageData);
                }

            }
            catch(e){
                Client.updateErrorUI();
            }


        }

        /*If the weatherDataType is current, then only current weather details is fetched.
        The weather summary section would then be hidden by using showWeatherSummary function.
        */
        

        else {
            
            Client.showWeatherSummary(false);

            try{
                const weatherData = await Client.fetchTravelWeatherDetailData(inputValue);

                countryCode = weatherData.countryCode;
    
                await Client.updateDetailUI(weatherData,startDatePickerValue,endDatePickerValue,tripDuration);
    
                const imageData = await Client.fetchLocationImage(inputValue);
                if(imageData.error=== 'Could not find image for this location')
                {
                    if(countryCode)
                    {
                        const flagData = await Client.fetchCountryImage(countryCode);
                        await Client.updateLocationImageUI({webformatURL:flagData});
                    }
                    else {
                        Client.updateErrorUI();
                        Client.clearLocationImageUI();
                    }
                }
                else {
                    await Client.updateLocationImageUI(imageData);
                }
    

            }
            catch(e){
                Client.updateErrorUI();
            }

        }

    }

    //If the destination value is empty, then errorUI is updated with the error message.

    else {
        Client.updateErrorUI('Please enter the destination name');
    }

    $SUBMIT_BUTTON.removeAttribute('disabled');

}

$SUBMIT_BUTTON.addEventListener('click',getTravelData);

module.exports = { getTravelData };