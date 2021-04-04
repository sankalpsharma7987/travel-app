const $WEATHER_SAVE_ELEMENT = document.querySelector('.saved-trips');
const $WEATHER_SAVE_HEADING_ELEMENT = document.querySelector('.saved-trip-heading');

const updateSaveTripUI = (data)=>{
    
    Client.clearSaveTripUI();
    
    if(!(data.error==='No trips saved' || data.error === 'No match found'))
    {   
        const tripData = Object.values(data);
        tripData.forEach(data=>{
            const fragment = Client.createSaveTripElement(data);
            $WEATHER_SAVE_ELEMENT.appendChild(fragment);
        });

        if(!$WEATHER_SAVE_HEADING_ELEMENT.classList.contains('saved-trip-heading-display'))
        {
            $WEATHER_SAVE_HEADING_ELEMENT.classList.add('saved-trip-heading-display');
        }
        

    }

    else if(data.error === 'No match found')
    {   
        
        Client.updateErrorUI('Cannot delete trip');
        Client.loadTripData();
    }

    else {
        $WEATHER_SAVE_HEADING_ELEMENT.classList.remove('saved-trip-heading-display');
    }

}

module.exports = { updateSaveTripUI };