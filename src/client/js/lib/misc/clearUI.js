const $INPUT_ELEMENT = document.querySelector('#destination');

const clearUI = ()=>{
    $INPUT_ELEMENT.value = "";
    $INPUT_ELEMENT.focus();
    Client.setDatePickerValue();
}

module.exports = { clearUI }