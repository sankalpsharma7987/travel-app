const $WEATHER_DETAIL_ELEMENT = document.querySelector('.weather-detail')
const $WEATHER_DETAIL_SECTION = document.querySelector('.weather-detail-section');

/*Client-Side Javascript. 
Helper function to clear elements of the weather detail section and also remove weather detail section background when there is no data to display.
This function will be called by other client-side javascript function.
*/

const clearDetailUI = ()=>{

    $WEATHER_DETAIL_ELEMENT.innerHTML = "";
    $WEATHER_DETAIL_SECTION.classList.remove('weather-detail-section-background');

}

module.exports = { clearDetailUI };