const postTripData = async()=>{

    const $LOCATION_VALUE = document.querySelector('.weather-detail-location');
    const location = $LOCATION_VALUE.textContent.substring(11);
    const travelDate = document.querySelector('.weather-detail-travel-date').textContent.substring(12);

    const trip = { 
        location: location,
        date : travelDate
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
        console.log(e);//Instead of rendering on the console, display the message as an error on the index.html
    }

}

module.exports =  { postTripData };