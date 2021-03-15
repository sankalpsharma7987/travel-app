const createSaveTripElement = (data) => {

    const date = document.createElement('div');
    let text = `${data.startDate}`;
    date.innerHTML = text;
    date.classList.add('saved-trip-date');

    const location = document.createElement('div');
    text =  `${data.location}`;
    location.innerHTML = text;
    location.classList.add('saved-trip-location');

    const dateVal = new Date();
    let currentDay = dateVal.getDate();
    let currentMonth = dateVal.getMonth()+1;
    let currentYear = dateVal.getFullYear();

    /*This timestamp is added as a workaround for the day offset that is returned when string is passed to date function.
    This offset issue is not observed in setDatePickerValue function as we are passing the date in the Date constructor and not the string.*/

    const futureDateVal = new Date(`${data.startDate} 00:00:00`); 
    let futureDay = futureDateVal.getDate();
    let futureMonth = futureDateVal.getMonth()+1;
    let futureYear = futureDateVal.getFullYear();

    if(futureDay<10)
    {
        futureDay = `0${futureDay}`
    }
    if(currentDay<10){
        currentDay = `0${currentDay}`;
    }

    if(currentMonth<10){
        currentMonth = `0${currentMonth}`;
    }

    if(futureMonth<10)
    {
        futureMonth = `0${futureMonth}`
    }
   
    const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
    const futureDate = `${futureYear}-${futureMonth}-${futureDay}`
    const daysRemaining = Client.calculateDateDiffDays(currentDate,futureDate);
    
    if(daysRemaining<0)
    {
        text = 'Expired';
    }
    else if(daysRemaining==0)
    {
        text = 'Today';

    }

    else if(daysRemaining==1)
    {
        text = 'Tomorrow';
    }

    else if(daysRemaining>1)
    {
        text = `${daysRemaining} days to go`;
    }
    
    const days = document.createElement('div');
    days.innerHTML = text;
    days.classList.add('saved-trip-daysRemaining');

    const closeBox = document.createElement('div');
    text = 'Remove';
    closeBox.innerHTML = text;
    closeBox.classList.add('saved-trip-remove');
    closeBox.setAttribute('id',data.id);

    const tripDetail = document.createElement('div');
    tripDetail.setAttribute('id',data.id);

    tripDetail.appendChild(date);
    tripDetail.appendChild(location);
    tripDetail.appendChild(days);
    tripDetail.appendChild(closeBox);
    tripDetail.classList.add('saved-trip');

    return tripDetail;

}

module.exports = { createSaveTripElement };