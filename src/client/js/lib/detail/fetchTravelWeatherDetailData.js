/*Client-Side Javascript. 
This helper function is used to fetch weather details from the express server. The end-point used here is current.
The data fetched is then returned to the calling function.
If an error is observed at the of fetching, then errorUI is updated with the error message.
*/

const fetchTravelWeatherDetailData = async(address)=>{

    try {

        // const res = await fetch(`http://localhost:3000/current?address=${address}`)
        const res  = await fetch(`/current?address=${address}`);
        const data = await res.json();
        return data;

    }

    catch(e){

        Client.updateErrorUI();
    
    }

}

module.exports =  { fetchTravelWeatherDetailData };