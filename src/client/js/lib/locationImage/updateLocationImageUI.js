const $ERROR_ELEMENT = document.querySelector('.error-section');
const updateLocationImageUI = async(imageData)=>{

    if(imageData===undefined)
    {   
        console.log('Spinning');
        const imageData ={};
        imageData.webformatURL = './spinning_wheel.gif';
        console.log(imageData);
        alert('Image Loading...');
        try {
            Client.updateLocationImage(imageData);
        }
        catch(e)
        {
            Client.updateErrorUI();
        }
    }

    else {
        try {
            // Client.clearDetailUI();
            Client.updateLocationImage(imageData);
        }
    
        catch(e)
        {
            // console.log(e); //Instead of rendering on the console, display the message as an error on the index.html
            Client.updateErrorUI();
        }
        
    }



}

module.exports = { updateLocationImageUI };