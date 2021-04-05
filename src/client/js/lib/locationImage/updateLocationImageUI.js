/*Client-Side Javascript.
This helper function calls the updateLocationImage function to render the image in the locatio image section.
If an error is observed then the error is rendered in the error section.
*/

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