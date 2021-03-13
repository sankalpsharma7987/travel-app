const $WEATHER_SAVE_ELEMENT = document.querySelector('.saved-trips');

const updateSaveTripUI = (data)=>{
    
    const tripData = Object.values(data);
    Client.clearSaveTripUI();
    tripData.forEach(data=>{
        const fragment = Client.createSaveTripElement(data);
        $WEATHER_SAVE_ELEMENT.appendChild(fragment);
    });

}

module.exports = { updateSaveTripUI };