const $ERROR_ELEMENT = document.querySelector('.error-section');
const updateLocationImageUI = async(imageData)=>{
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

module.exports = { updateLocationImageUI };