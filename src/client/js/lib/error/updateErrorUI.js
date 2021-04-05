/*Client-Side Javascript.
This helper function is used to clear the existing error from the error-section and create new error, based on the error message received as an argument for this function.
The elements received by the create error element function is then appended to the error-section
*/

const $ERROR_ELEMENT = document.querySelector('.error-section');

const updateErrorUI = (error='Could not fetch data at this time.Please try again later')=>{

    Client.clearErrorUI();
    const fragment = Client.createErrorElement(error);
    $ERROR_ELEMENT.appendChild(fragment);
}

module.exports = { updateErrorUI };