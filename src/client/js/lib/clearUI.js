const $INPUT_ELEMENT = document.querySelector('#destination');

const clearUI = ()=>{
    $INPUT_ELEMENT.value = "";
    Client.setDatePickerValue();
}

module.exports = { clearUI }