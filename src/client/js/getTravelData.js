const $INPUT_ELEMENT = document.querySelector('#destination');
const $SUBMIT_BUTTON = document.querySelector('#submit-button');
const $DATE_ELEMENT = document.querySelector('#date-picker');
const $END_DATE_ELEMENT = document.querySelector('#end-date-picker');
let countryCode = '';

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

    Client.clearErrorUI();
    
    //The destination string is validated to ensure the input value of the destination is not empty

    if(Client.validateDestinationInput($INPUT_ELEMENT.value))
    {
        Client.clearSummaryUI();
        Client.clearDetailUI();
        Client.clearLocationImageUI();
        
        const dateVal = new Date();
        const startDatePickerValue = $DATE_ELEMENT.value;
        const endDatePickerValue = $END_DATE_ELEMENT.value;

        //dayDiff gives the countdown of the number of days left before the trip.

        let dayDiff = Client.calculateDateDiffDays(dateVal.toString(),startDatePickerValue)

        //tripDuration gives duration of trip

        let tripDuration = Client.calculateDateDiffDays(startDatePickerValue,endDatePickerValue)

        //Based on the value of dayDiff, the weatherDataType is selected.

        let weatherDataType = dayDiff>=6?'forecast':'current'

        /*If the weatherDataType is forecast, then the current weather as well as the 15 day forecast of the weather, for the destination, is fetched.
        The weather summary section would be displayed using showWeatherSummary function.
        */

        if(weatherDataType==='forecast')
        {
            Client.showWeatherSummary(true);
            Client.fetchTravelWeatherSummaryData($INPUT_ELEMENT.value).then(
                data => Client.updateWeatherSummaryUI(data)
            ).catch(e=>Client.updateErrorUI());

            Client.fetchTravelWeatherDetailData($INPUT_ELEMENT.value).then(
                data => 
                {
                    Client.updateDetailUI(data,startDatePickerValue,endDatePickerValue,tripDuration)
                    countryCode = data.countryCode;
                }
                
            ).then(
                Client.updateLocationImageUI({webformatURL:'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'}), //This function will be first called to render the spinning wheel image.
                Client.fetchLocationImage($INPUT_ELEMENT.value).then(
                    data=> {
                        if(data.error === 'Could not find image for this location')
                        {
                            Client.fetchCountryImage(countryCode).then(data=>Client.updateLocationImageUI({webformatURL:data}));
                        }
                        else {
                            Client.updateLocationImageUI(data);
                        }
                    }

                ).catch(e=> Client.updateErrorUI())
            ).catch(e=>Client.updateErrorUI());

        }

        /*If the weatherDataType is current, then only current weather details is fetched.
        The weather summary section would then be hidden by using showWeatherSummary function.
        */
        

        else {
            
            Client.showWeatherSummary(false);
            
            Client.fetchTravelWeatherDetailData($INPUT_ELEMENT.value).then(
                data => 
                {
                    Client.updateDetailUI(data,startDatePickerValue,endDatePickerValue,tripDuration)
                    countryCode = data.countryCode;
                }
                
            ).then(
                Client.updateLocationImageUI({webformatURL:'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'}), //This function will be first called to render the spinning wheel image.
                Client.fetchLocationImage($INPUT_ELEMENT.value).then(
                    data=> {
                        if(data.error === 'Could not find image for this location')
                        {   
                            Client.fetchCountryImage(countryCode).then(data=>Client.updateLocationImageUI({webformatURL:data}));
                        }
                        else {
                            Client.updateLocationImageUI(data);
                        }
                    }

                ).catch(e=>Client.updateErrorUI())

            ).catch(e=>Client.updateErrorUI());

        }

    }

    //If the destination value is empty, then errorUI is updated with the error message.

    else {
        Client.updateErrorUI('Please enter the destination name');
    }

    Client.clearUI() // Clears the textbox UI Element.

}

$SUBMIT_BUTTON.addEventListener('click',getTravelData);

module.exports = { getTravelData };