/*Client-Side Javascript
This helper function is use to update the fetch the savedtrip elements and update the save trip section with the fetched data.
This function would run everytime when the page is loaded.
 */

const loadTripData = async()=>{

    try {

        data = await Client.getTripData();
        Client.updateSaveTripUI(data)

    }
    catch(e)
    {

        Client.updateErrorUI();
        
    }

}

window.addEventListener('load',loadTripData);

module.exports = { loadTripData };