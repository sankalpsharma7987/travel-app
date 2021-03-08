const $INPUT_ELEMENT = document.querySelector('#destination');
const $SUBMIT_BUTTON = document.querySelector('#submit-button');
const $DATE_ELEMENT = document.querySelector('#date-picker');

const getTravelData = async()=> {

    const dateVal = new Date();
    let dayDiff = Client.calculateDateDiffDays(dateVal.toString(),$DATE_ELEMENT.value)
    let weatherDataType = dayDiff>=6?'forecast':'current'

    Client.clearSummaryUI();
    Client.clearDetailUI();
    Client.clearLocationImageUI();

    if(weatherDataType==='forecast')
    {
        Client.showWeatherSummary(true);
        Client.fetchTravelWeatherDetailData($INPUT_ELEMENT.value).then(
            data => Client.updateDetailUI(data)
        )

        Client.fetchTravelWeatherSummaryData($INPUT_ELEMENT.value).then(
            data => Client.updateSummaryUI(data)
        )
    }

    else {
        Client.showWeatherSummary(false);
        Client.fetchTravelWeatherDetailData($INPUT_ELEMENT.value).then(
            data => Client.updateDetailUI(data)
        )
    }

    Client.fetchLocationImage($INPUT_ELEMENT.value).then(
        data=> Client.updateLocationImageUI(data)
    );

    Client.clearUI() // Clears the textbox UI Element.

}

$SUBMIT_BUTTON.addEventListener('click',getTravelData);

module.exports = { getTravelData };