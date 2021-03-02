const $INPUT_ELEMENT = document.querySelector('#destination');
const $WEATHER_SUMMARY_ELEMENT = document.querySelector('.weather-summary-section')

const clearUI = ()=>{
    $INPUT_ELEMENT.value = "";
    $WEATHER_SUMMARY_ELEMENT.innerHTML = "";
}

module.exports = { clearUI };