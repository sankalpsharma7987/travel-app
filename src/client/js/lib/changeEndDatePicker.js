const $END_DATE_ELEMENT = document.querySelector('#end-date-picker');
const $DATE_ELEMENT = document.querySelector('#date-picker');

const changeEndDatePicker = (e)=>{
    console.log(e.target.value);
    $END_DATE_ELEMENT.min = e.target.value;
    $END_DATE_ELEMENT.value = e.target.value;

}

$DATE_ELEMENT.addEventListener('change',changeEndDatePicker);
module.exports = { changeEndDatePicker };