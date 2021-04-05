/*Client-Side Javascript
This helper function is used to fetch all the saved trips at the express server.
The returned object from the express server is a set of objects.
This data is then returned to the calling function.
 */

const getTripData = async()=>{
    
    try {

        const res = await fetch(`http://localhost:3000/fetchTrip`)
        const data = await res.json();
        return data;
        
    }
    catch(e){
        
        Client.updateErrorUI();

    }

}

module.exports =  { getTripData };