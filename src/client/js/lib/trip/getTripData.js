const $ERROR_ELEMENT = document.querySelector('.error-section');
const getTripData = async()=>{
    
    try {
        const res = await fetch(`http://localhost:3000/fetchTrip`)
        const data = await res.json();
        return data;
    }
    catch(e){
        // console.log(e);//Instead of rendering on the console, display the message as an error on the index.html
        Client.updateErrorUI();
    }

}

module.exports =  { getTripData };