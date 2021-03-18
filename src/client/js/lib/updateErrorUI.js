const $ERROR_ELEMENT = document.querySelector('.error-section');

const updateErrorUI = (error='Could not fetch data at this time.Please try again later')=>{

    Client.clearErrorUI();
    const fragment = Client.createErrorElement(error);
    $ERROR_ELEMENT.appendChild(fragment);
}

module.exports = { updateErrorUI };