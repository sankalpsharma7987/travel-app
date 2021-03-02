const $INPUT_ELEMENT = document.querySelector('#destination');
const $SUBMIT_BUTTON = document.querySelector('#submit-button');
const $DATE_ELEMENT = document.querySelector('#date-picker');

const getTravelData = async()=> {

    const dateVal = new Date();
    let dayDiff = Client.calculateDateDiffDays(dateVal.toString(),$DATE_ELEMENT.value)
    let weatherDataType = dayDiff>=6?'forecast':'current'

    Client.fetchTravelData($INPUT_ELEMENT.value,weatherDataType).then(
        data => Client.updateUI(data)
    )
}

$SUBMIT_BUTTON.addEventListener('click',getTravelData);

module.exports = { getTravelData };