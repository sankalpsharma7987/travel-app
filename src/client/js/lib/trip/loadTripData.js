const $ERROR_ELEMENT = document.querySelector('.error-section');
const loadTripData = async()=>{

    try {
        data = await Client.getTripData();
        Client.updateSaveTripUI(data)

    }
    catch(e)
    {
        // console.log(e);
        Client.updateErrorUI();
    }

}

window.addEventListener('load',loadTripData);

module.exports = { loadTripData };