const $DATE_ELEMENT = document.querySelector('#date-picker');

const setDatePickerValue = ()=>{

    const dateVal = new Date();
        
    let dateDay = dateVal.getDate();
    let dateMonth = dateVal.getMonth()+1;
    let dateYear = dateVal.getFullYear();

    const futureDateVal = new Date(dateVal);
    
    futureDateVal.setDate(futureDateVal.getDate()+15);
    
    let futureDay = futureDateVal.getDate();
    let futureMonth = futureDateVal.getMonth()+1;
    let futureYear = futureDateVal.getFullYear();

    if(dateMonth<10)
    {
        dateMonth = `0${dateMonth}`;
    }

    if(dateDay<10)
    {
        dateDay = `0${dateDay}`;

    }

    if(futureMonth<10)
    {
        futureMonth = `0${futureMonth}`;
    }

    if(futureDay<10)
    {
        futureDay = `0${futureDay}`;
    }

    const currentDate = `${dateYear}-${dateMonth}-${dateDay}`;
    const futureDate = `${futureYear}-${futureMonth}-${futureDay}`

    /*Note:- Since the min and max date value have same year, the date input will have the current year as the default year.
    This is because the min and max usually follow a certain range and set default values for certain date elements which are common.
    In our case the min and max date have a difference of 15 days. So month and date are different but the year is same.
    Had the year been different(example 2022), then the date input element would have shown it to be mm-dd-yyyy format instead of mm-dd-2021(in our case 2021 is the current year)
    Another example is if the min date was 2017-04-17 and max date value was 2017-04-30, the input date element would have shown 04-dd-2017 instead of mm-dd-yyyy format
    */
   
    $DATE_ELEMENT.min = currentDate;
    $DATE_ELEMENT.value = currentDate;
    $DATE_ELEMENT.max = futureDate;

}

window.addEventListener('load',setDatePickerValue);

module.exports = { setDatePickerValue };