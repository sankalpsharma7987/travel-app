const loadTripData = async()=>{

    try {
        data = await Client.getTripData();
        if(data)
        {
            await Client.updateSaveTripUI(data);
        }

    }
    catch(e)
    {
        console.log(e);
    }

}

window.addEventListener('load',loadTripData);

module.exports = { loadTripData };