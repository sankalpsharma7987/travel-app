const updateLocationImageUI = async(imageData)=>{

    try {
        if(imageData===undefined)
        {
            const imageSpinningData = {};
            // imageSpinningData.webformatURL = './spinning_wheel.gif';
            imageSpinningData.webformatURL = 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif';
            Client.updateLocationImage(imageSpinningData);
        }
        else {
            Client.updateLocationImage(imageData);
        }

    }

    catch(e)
    {
        Client.updateErrorUI(e);
    }



}

module.exports = { updateLocationImageUI };