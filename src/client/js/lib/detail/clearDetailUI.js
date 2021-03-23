const $WEATHER_DETAIL_ELEMENT = document.querySelector('.weather-detail')
const $WEATHER_DETAIL_SECTION = document.querySelector('.weather-detail-section');

const clearDetailUI = ()=>{
    $WEATHER_DETAIL_ELEMENT.innerHTML = "";
    $WEATHER_DETAIL_SECTION.classList.remove('weather-detail-section-background');
}
0
module.exports = { clearDetailUI };