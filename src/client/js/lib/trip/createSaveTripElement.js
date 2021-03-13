const createSaveTripElement = (data) => {
    console.log(data);
    const date = document.createElement('div');
    let text = `${data.date}`;
    date.innerHTML = text;
    date.classList.add('saved-trip-date');

    const location = document.createElement('div');
    text =  `${data.location}`;
    location.innerHTML = text;
    location.classList.add('saved-trip-location');

    const dateVal = new Date();
    let dateDay = dateVal.getDate();
    let dateMonth = dateVal.getMonth()+1;
    let dateYear = dateVal.getFullYear();
    const currentDate = `${dateYear}-${dateMonth}-${dateDay}`;
    const daysRemaining = Client.calculateDateDiffDays(currentDate,data.date);
  
    text = `${daysRemaining} days to go`;
    const days = document.createElement('div');
    days.innerHTML = text;
    days.classList.add('saved-trip-daysRemaining');

    const closeBox = document.createElement('div');
    text = 'Remove';
    closeBox.innerHTML = text;
    closeBox.classList.add('save-trip-remove');
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