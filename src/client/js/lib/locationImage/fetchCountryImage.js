const fetchCountryImage = async(countryCode)=>{
    try {
        const url = `https://restcountries.eu/rest/v2/alpha/${countryCode}`;
        const res = await fetch(url);
        const data = await res.json();
        return data.flag;
    }
    catch(e)
    {
        console.log(e);
    }
    
}

module.exports = { fetchCountryImage };