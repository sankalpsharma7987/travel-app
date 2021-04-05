/*Client-Side Javascript.
This helper function is called to fetch the image of the destination from the pixabay api.
The end-point calls the express server.This returns the data object that contains the url of the image for the destination.
*/

const fetchLocationImage = async(address)=>{

    try {

        const res = await fetch(`http://localhost:3000/fetchImage?address=${address}`)
        const data = await res.json();
        return data;
        
    }
    catch(e){

        Client.updateErrorUI();

    }

}

module.exports =  { fetchLocationImage };