/*Client-Side Javascript
This helper function is used to create save trip element.
Each saved trip element consists of location, start date of the trip and days remaining for the trip.
Each saved trip element also has an option to remove the saved trip.
The saved trip element is then returned as a fragment object to the calling function.
*/

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

    const futureDateSplitVal = data.startDate.split('-');

    //This Date constructor is used in order to accomodate date conversions across different browsers
    
    const futureDateVal = new Date(`${futureDateSplitVal[0]}`,`${futureDateSplitVal[1]-1}`,`${futureDateSplitVal[2]}`); 
    
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
    const futureDate = `${futureYear}-${futureMonth}-${futureDay}`;
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

    const removeTripButton = document.createElement('div');
    text = 'Remove Trip';
    removeTripButton.innerHTML = text;
    removeTripButton.classList.add('saved-trip-remove');
    removeTripButton.setAttribute('id',data.id);

    const tripDetail = document.createElement('div');
    tripDetail.setAttribute('id',data.id);

    tripDetail.appendChild(date);
    tripDetail.appendChild(location);
    tripDetail.appendChild(days);
    tripDetail.appendChild(removeTripButton);
    tripDetail.classList.add('saved-trip');

    return tripDetail;

}

module.exports = { createSaveTripElement };