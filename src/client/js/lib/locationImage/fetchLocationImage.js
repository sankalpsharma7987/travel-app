const $ERROR_ELEMENT = document.querySelector('.error-section');
const fetchLocationImage = async(address)=>{

    try {
        const res = await fetch(`http://localhost:3000/fetchImage?address=${address}`)
        const data = await res.json();
        return data;
    }
    catch(e){
        // console.log(e);//Instead of rendering on the console, display the message as an error on the index.html
        Client.updateErrorUI();
    }

}

module.exports =  { fetchLocationImage };