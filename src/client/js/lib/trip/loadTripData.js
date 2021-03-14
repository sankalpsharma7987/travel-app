const loadTripData = async()=>{

    try {
        data = await Client.getTripData();
        Client.updateSaveTripUI(data)

    }
    catch(e)
    {
        console.log(e);
    }

}

window.addEventListener('load',loadTripData);

module.exports = { loadTripData };