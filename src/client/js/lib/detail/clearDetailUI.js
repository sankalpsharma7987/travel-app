const $INPUT_ELEMENT = document.querySelector('#destination');
const $WEATHER_DETAIL_ELEMENT = document.querySelector('.weather-detail-section')

const clearDetailUI = ()=>{
    $WEATHER_DETAIL_ELEMENT.innerHTML = "";
}

module.exports = { clearDetailUI };