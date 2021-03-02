const fetchTravelData = async(address, weatherDataType)=>{

    try {
        const res = await fetch(`http://localhost:3000/travel?address=${address}&weather=${weatherDataType}`)
        const data = await res.json();
        return data;
    }
    catch(e){
        console.log(e);//Instead of rendering on the console, display the message as an error on the index.html
    }

}

module.exports =  { fetchTravelData };