/*Client-Side Javascript.
This helper function is used to fetch weather summary from the express server.
The data fetched is then returned to the calling function.
*/

const fetchTravelWeatherSummaryData = async(address)=>{

    try {

        const res = await fetch(`http://localhost:3000/forecast?address=${address}`)
        const data = await res.json();
        return data;

    }

    catch(e){

        Client.updateErrorUI();

    }

}

module.exports =  { fetchTravelWeatherSummaryData };