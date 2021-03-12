const $WEATHER_SAVE_ELEMENT = document.querySelector('.saved-trips');

const clearSaveTripUI = ()=>{

    $WEATHER_SAVE_ELEMENT.innerHTML = "";

}

module.exports = { clearSaveTripUI };