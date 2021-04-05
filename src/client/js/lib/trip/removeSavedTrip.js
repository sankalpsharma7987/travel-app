const $WEATHER_SAVE_ELEMENT = document.querySelector('.saved-trips');

/*Client-Side Javascript
This helper function is used to remove the saved trip from the express server.
The id of the trip to be removed is sent to the deleteSavedTrip function.
The deleteSavedTrip will then delete the trip from the express server and will return the updated list of object.
This set of object will then be rendered to the SavedTrip section.
*/

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