const $INPUT_ELEMENT = document.querySelector('#destination');

/* Client-Side Javascript. This is a helper function to clear the UI elements. This function is called by other Client side functions */

const clearUI = ()=>{

    $INPUT_ELEMENT.value = "";
    $INPUT_ELEMENT.focus();
    Client.setDatePickerValue();
    
}

module.exports = { clearUI }