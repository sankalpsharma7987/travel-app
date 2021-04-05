/*Client-Side Javascript. 
This helper function is used to clear the errorUI elements.
This function is called by other client-side javascript functions.
*/

const $ERROR_ELEMENT = document.querySelector('.error-section');
const clearErrorUI = ()=>{
    $ERROR_ELEMENT.innerHTML = "";
}

module.exports = { clearErrorUI };
