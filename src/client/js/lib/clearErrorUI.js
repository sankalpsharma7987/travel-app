const $ERROR_ELEMENT = document.querySelector('.error-section');
const clearErrorUI = ()=>{
    $ERROR_ELEMENT.innerHTML = "";
}

module.exports = { clearErrorUI };
