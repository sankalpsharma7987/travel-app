/*Client-Side Javascript
This helper function calls the postTripData to send the saved trip data information to the weather.
The trip object information is retrieved from the weather detail location section.
The clearErrorUI function is called to delete any existing error element present.
*/
const saveTrip = async()=>{
    
    Client.clearErrorUI();

    const $LOCATION_VALUE = document.querySelector('.weather-detail-location');
    const location = $LOCATION_VALUE.textContent.substring(11);
    const travelStartDate = document.querySelector('.weather-detail-travel-start-date').textContent.substring(16);
    const travelEndDate = document.querySelector('.weather-detail-travel-end-date').textContent.substring(13);
    const tripDuration = document.querySelector('.weather-detail-trip-duration').textContent;
    
    try {

        if(location&&travelStartDate&&travelEndDate&&tripDuration)
        {
    
            const trip = {
                location: location,
                startDate : travelStartDate,
                endDate: travelEndDate,
                tripDuration: tripDuration
            };

            const data =  await Client.postTripData(trip);
            Client.updateSaveTripUI(data);
    
        }

        else {
            
            Client.updateErrorUI('Cannot save trip details')

        }
    
    
    }

    catch(e)
    {

       Client.updateErrorUI('Cannot save trip details.');
       
    }
    
}

module.exports = { saveTrip };