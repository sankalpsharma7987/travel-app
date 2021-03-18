const $INPUT_ELEMENT = document.querySelector('#destination');
const $SUBMIT_BUTTON = document.querySelector('#submit-button');
const $DATE_ELEMENT = document.querySelector('#date-picker');
const $END_DATE_ELEMENT = document.querySelector('#end-date-picker');
let countryCode = '';

const getTravelData = async()=> {

    Client.clearErrorUI();
    

    if($INPUT_ELEMENT.value!=='')
    {
        Client.clearSummaryUI();
        Client.clearDetailUI();
        Client.clearLocationImageUI();
        
        const dateVal = new Date();
        const startDatePickerValue = $DATE_ELEMENT.value;
        const endDatePickerValue = $END_DATE_ELEMENT.value;

        let dayDiff = Client.calculateDateDiffDays(dateVal.toString(),startDatePickerValue)
        let tripDuration = Client.calculateDateDiffDays(startDatePickerValue,endDatePickerValue)
        let weatherDataType = dayDiff>=6?'forecast':'current'

        if(weatherDataType==='forecast')
        {
            Client.showWeatherSummary(true);
            Client.fetchTravelWeatherSummaryData($INPUT_ELEMENT.value).then(
                data => Client.updateSummaryUI(data)
            ).catch(e=>Client.updateErrorUI());

            // Client.fetchTravelWeatherDetailData($INPUT_ELEMENT.value).then(
            //     data => Client.updateDetailUI(data,startDatePickerValue,endDatePickerValue,tripDuration)
            // )

            Client.fetchTravelWeatherDetailData($INPUT_ELEMENT.value).then(
                data => 
                {
                    Client.updateDetailUI(data,startDatePickerValue,endDatePickerValue,tripDuration)
                    countryCode = data.countryCode;
                }
                
            ).then(
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

        else {
            
            Client.showWeatherSummary(false);
            
            Client.fetchTravelWeatherDetailData($INPUT_ELEMENT.value).then(
                data => 
                {
                    Client.updateDetailUI(data,startDatePickerValue,endDatePickerValue,tripDuration)
                    countryCode = data.countryCode;
                }
                
            ).then(
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

        // Client.fetchLocationImage($INPUT_ELEMENT.value).then(
        //     data=> Client.updateLocationImageUI(data)
        // );
    }

    else {
        Client.updateErrorUI('Please enter the destination name');
    }

    Client.clearUI() // Clears the textbox UI Element.


}

$SUBMIT_BUTTON.addEventListener('click',getTravelData);

module.exports = { getTravelData };