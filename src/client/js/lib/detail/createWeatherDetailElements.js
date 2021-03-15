const createWeatherDetailElements = (weatherData,startDatePickerValue,endDatePickerValue,tripDuration)=>{
    
    const fragment = document.createDocumentFragment();

    const weatherDetail = document.createElement('div');

    const locationDiv = document.createElement('div');
    let text= `Weather for ${weatherData.city_name}`;
    locationDiv.innerHTML = text;
    locationDiv.classList.add('weather-detail-location');
    
    const tempDiv = document.createElement('div');
    text = `<h1>${weatherData.data.temp}&deg</h1>`;
    tempDiv.innerHTML = text;
    
    const descriptionDiv = document.createElement('div');
    text = `${weatherData.data.weather.description}`;
    descriptionDiv.innerHTML = text;

    const precipDiv = document.createElement('div');
    text = `Precipitation ${weatherData.data.precip}%`;
    precipDiv.innerHTML = text;

    const humidityDiv = document.createElement('div');
    text = `Humidity ${weatherData.data.rh}%`;
    humidityDiv.innerHTML = text;
    
    const travelStartDateDiv = document.createElement('div');
    text = `Start Date ${startDatePickerValue}`;
    travelStartDateDiv.innerHTML = text;

    travelStartDateDiv.classList.add('weather-detail-travel-start-date')

    
    const travelEndDateDiv = document.createElement('div');
    text = `End Date ${endDatePickerValue}`;
    travelEndDateDiv.innerHTML = text;

    travelEndDateDiv.classList.add('weather-detail-travel-end-date')

    const tripDurationDiv = document.createElement('div');
    text=  tripDuration==0?'Same Day Return':`Trip Duration ${tripDuration} days`;
    tripDurationDiv.innerHTML = text;
    tripDurationDiv.classList.add('weather-detail-trip-duration');

    const detail = document.createElement('div');
    detail.appendChild(locationDiv);
    detail.appendChild(tempDiv);
    detail.appendChild(descriptionDiv);
    detail.appendChild(precipDiv);
    detail.appendChild(humidityDiv);
    detail.appendChild(travelStartDateDiv);
    detail.appendChild(travelEndDateDiv);
    detail.appendChild(tripDurationDiv);
    
    const weatherImage = document.createElement('div');
    text = `<img src=https://www.weatherbit.io/static/img/icons/${weatherData.data.weather.icon}.png>`;
    weatherImage.innerHTML = text;

    const saveTripButton = document.createElement('button');
    text = "Save Trip";
    saveTripButton.innerHTML = text;
    saveTripButton.classList.add('save-trip-btn');
    saveTripButton.addEventListener('click',Client.saveTrip);

    weatherDetail.appendChild(detail);
    weatherDetail.appendChild(weatherImage);
    weatherDetail.appendChild(saveTripButton);
    
    fragment.appendChild(weatherDetail);

    return fragment;

}

export { createWeatherDetailElements };