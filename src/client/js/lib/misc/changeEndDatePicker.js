const $END_DATE_ELEMENT = document.querySelector('#end-date-picker');
const $DATE_ELEMENT = document.querySelector('#date-picker');

/* Client side Javascript.
The min value of the To datepicker(end-date-picker) is set based on the value choose in the form datepicker(date-picker).
For example, if the From datepicker has date set to 2021-02-23 then the min value of the To datepicker will be set to 2021-02-23. User can then select the date of his choice
for the To datepicker. This event will be called when the datepicker value of the start date of the duration is changed.
 */

const changeEndDatePicker = (e)=>{
    
    $END_DATE_ELEMENT.min = e.target.value;
    $END_DATE_ELEMENT.value = e.target.value;

}

$DATE_ELEMENT.addEventListener('change',changeEndDatePicker);
module.exports = { changeEndDatePicker };