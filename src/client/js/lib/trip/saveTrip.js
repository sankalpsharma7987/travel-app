// const $SAVE_TRIP_BUTTON = document.querySelector('.save-trip-btn');
const saveTrip = async()=>{

    try {

        const message =  await Client.postTripData();

        if(message.success === 'Trip saved') 
        {
            data = await Client.getTripData();
            await Client.updateSaveTripUI(data);
        }

    }

    catch(e)
    {
        console.log(e);
    }
    
}
// $SAVE_TRIP_BUTTON.addEventListener('click',saveTrip);

module.exports = { saveTrip };