const $WEATHER_SAVE_ELEMENT = document.querySelector('.saved-trips');

const removeSavedTrip = async(e)=>{

    if(e.target.classList.contains('saved-trip-remove'))
    {   
        Client.clearErrorUI();
        const data = await Client.deleteSavedTrip(e.target.id);
        Client.updateSaveTripUI(data);



    }
   
}

$WEATHER_SAVE_ELEMENT.addEventListener('click',removeSavedTrip);

module.exports = { removeSavedTrip };