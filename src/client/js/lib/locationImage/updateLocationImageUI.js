const updateLocationImageUI = async(imageData)=>{
    try {
        // Client.clearDetailUI();
        Client.updateLocationImage(imageData);
    }

    catch(e)
    {
        console.log(e); //Instead of rendering on the console, display the message as an error on the index.html
    }

}

module.exports = { updateLocationImageUI };