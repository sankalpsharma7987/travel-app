/*Client-Side Javascript
This helper function is use to post the saved trip to the express server.
The returned object from the express server is an updated set of objects.
This data is then returned to the calling function.
 */

const postTripData = async(trip)=>{

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

        Client.updateErrorUI();
        
    }

}

module.exports =  { postTripData };