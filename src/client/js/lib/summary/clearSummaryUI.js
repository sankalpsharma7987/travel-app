/*Client-Side Javascript.
This helper function is used to clear any existing elements from the weather summary section
*/

const $WEATHER_SUMMARY_ELEMENT = document.querySelector('.weather-summary-section')

const clearSummaryUI = ()=>{

    $WEATHER_SUMMARY_ELEMENT.innerHTML = "";

}

module.exports = { clearSummaryUI };