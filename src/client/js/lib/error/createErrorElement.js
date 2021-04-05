/*Client-Side Javascript. 
This helper function is used to create error elements that contain the error message passed as an argument to this function.
The division element is then returned to the calling function
*/

const createErrorElement = (error)=>{

    const errorDiv = document.createElement('div');
    let text = `<p>${error}</p>`;
    errorDiv.innerHTML = text;

    return errorDiv;

}

module.exports = { createErrorElement };