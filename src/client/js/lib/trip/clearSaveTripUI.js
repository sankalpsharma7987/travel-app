const $WEATHER_SAVE_ELEMENT = document.querySelector('.saved-trips');

/* Client-Side Javascript
This helper function is used to clear the saved trip section.
*/

const clearSaveTripUI = ()=>{

    $WEATHER_SAVE_ELEMENT.innerHTML = "";

}

module.exports = { clearSaveTripUI };