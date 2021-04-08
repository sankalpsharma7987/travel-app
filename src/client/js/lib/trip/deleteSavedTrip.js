/*Client-Side Javascript
This helper function is use to delete the saved trip at the express server.
The returned object from the express server is an updated set of objects.
The returned object is the updated list of saved trip.
 */

const deleteSavedTrip = async(id)=>{

    
    try {

        const res = await fetch(`/deleteTrip?id=${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
        })
        const data = await res.json();
        return data;

    }

    catch(e){

        Client.updateErrorUI();

    }

}

module.exports =  { deleteSavedTrip };