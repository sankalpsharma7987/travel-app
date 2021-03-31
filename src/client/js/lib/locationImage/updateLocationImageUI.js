const updateLocationImageUI = async(imageData)=>{

    try {
        Client.updateLocationImage(imageData);
    }

    catch(e)
    {
        Client.updateErrorUI(e);
    }



}

module.exports = { updateLocationImageUI };