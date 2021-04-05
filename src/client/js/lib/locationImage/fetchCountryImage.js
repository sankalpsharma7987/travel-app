/*Client-Side Javascript.
This helper function is called to fetch the flag image of the country that belongs to the destination for which user plans the trip to.
This function will be called in a scenario when the express server is not able to return any image url from the PixaBay API.
*/
const fetchCountryImage = async(countryCode)=>{
    try {
        const url = `https://restcountries.eu/rest/v2/alpha/${countryCode}`;
        const res = await fetch(url);
        const data = await res.json();
        return data.flag;
    }
    catch(e)
    {   
        Client.updateErrorUI();
    }
    
}

module.exports = { fetchCountryImage };