const $WEATHER_SUMMARY_ELEMENT = document.querySelector('.weather-summary-section')

const clearSummaryUI = ()=>{
    $WEATHER_SUMMARY_ELEMENT.innerHTML = "";
}

module.exports = { clearSummaryUI };