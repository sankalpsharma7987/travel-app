const $ERROR_ELEMENT = document.querySelector('.error-section');
const postTripData = async()=>{

    const $LOCATION_VALUE = document.querySelector('.weather-detail-location');
    const location = $LOCATION_VALUE.textContent.substring(11);
    const travelStartDate = document.querySelector('.weather-detail-travel-start-date').textContent.substring(16);
    const travelEndDate = document.querySelector('.weather-detail-travel-end-date').textContent.substring(13);
    const tripDuration = document.querySelector('.weather-detail-trip-duration').textContent;
    
    const trip = { 
        location: location,
        startDate : travelStartDate,
        endDate: travelEndDate,
        tripDuration: tripDuration
};

    try {
        const res = await fetch(`http://localhost:3000/saveTrip`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(trip)
        })
        const data = await res.json();
        return data;
    }
    catch(e){
        // console.log(e);//Instead of rendering on the console, display the message as an error on the index.html
        Client.updateErrorUI();
    }

}

module.exports =  { postTripData };