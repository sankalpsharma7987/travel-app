const saveTrip = async()=>{

    try {


        const data =  await Client.postTripData();
        Client.updateSaveTripUI(data);


        
    }

    catch(e)
    {
        console.log(e);
    }
    
}

module.exports = { saveTrip };