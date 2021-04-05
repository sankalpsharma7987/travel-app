/*Client-Side Javascript. Helper function to validate if the destination string is empty. This function is called by other client-side javascript functions */

const validateDestinationInput = (destinationValue)=>{
    
    return destinationValue!==''?true:false;
}

module.exports = { validateDestinationInput };