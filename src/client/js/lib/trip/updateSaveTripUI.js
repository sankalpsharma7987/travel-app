const $WEATHER_SAVE_ELEMENT = document.querySelector('.saved-trips');
const $WEATHER_SAVE_HEADING_ELEMENT = document.querySelector('.saved-trip-heading');

/*Client-Side Javascript
This helper function is used to update the saved Trips received as an argument in the saved trip section.
If the data variable has an object, containing error message, then appropriate error message is sent to the errorUI element.
 */

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