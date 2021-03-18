const createWeatherDetailElements = (weatherData,startDatePickerValue,endDatePickerValue,tripDuration)=>{
    
    const locationDiv = document.createElement('div');
    let text= `<h3>Weather for ${weatherData.cityName}</h3>`;
    locationDiv.innerHTML = text;
    locationDiv.classList.add('weather-detail-location');
    
    const tempDiv = document.createElement('div');
    text = `<h1>${weatherData.data.temp}&deg C</h1>`;
    tempDiv.innerHTML = text;
    tempDiv.classList.add('weather-detail-temp');
    
    const descriptionDiv = document.createElement('div');
    text = `<h4>${weatherData.data.weather.description}</h4>`;
    descriptionDiv.innerHTML = text;
    descriptionDiv.classList.add('weather-detail-description');

    const precipDiv = document.createElement('div');
    text = `Precipitation ${weatherData.data.precip}%`;
    precipDiv.innerHTML = text;
    precipDiv.classList.add('weather-detail-precipitation');


    const humidityDiv = document.createElement('div');
    text = `Humidity ${weatherData.data.rh}%`;
    humidityDiv.innerHTML = text;
    humidityDiv.classList.add('weather-detail-humidity');
    
    const travelStartDateDiv = document.createElement('div');
    text = `Trip Start Date ${startDatePickerValue}`;
    travelStartDateDiv.innerHTML = text;
    travelStartDateDiv.classList.add('weather-detail-travel-start-date')

    
    const travelEndDateDiv = document.createElement('div');
    text = `Trip End Date ${endDatePickerValue}`;
    travelEndDateDiv.innerHTML = text;
    travelEndDateDiv.classList.add('weather-detail-travel-end-date')

    const tripDurationDiv = document.createElement('div');
    text=  tripDuration==0?'Same Day Return':`Trip Duration ${tripDuration} days`;
    tripDurationDiv.innerHTML = text;
    tripDurationDiv.classList.add('weather-detail-trip-duration');

    const weatherImage = document.createElement('div');
    text = `<img src=https://www.weatherbit.io/static/img/icons/${weatherData.data.weather.icon}.png>`;
    weatherImage.innerHTML = text;
    weatherImage.classList.add('weather-detail-image')

    const saveTripButton = document.createElement('button');
    text = "Save Trip";
    saveTripButton.innerHTML = text;
    saveTripButton.classList.add('save-trip-btn');
    saveTripButton.addEventListener('click',Client.saveTrip);


    const detailInfo = document.createElement('div');

    detailInfo.appendChild(locationDiv);
    detailInfo.appendChild(tempDiv);
    detailInfo.appendChild(descriptionDiv);
    detailInfo.appendChild(precipDiv);
    detailInfo.appendChild(humidityDiv);
    detailInfo.appendChild(travelStartDateDiv);
    detailInfo.appendChild(travelEndDateDiv);
    detailInfo.appendChild(tripDurationDiv);
    detailInfo.appendChild(weatherImage);
    detailInfo.appendChild(saveTripButton);
    detailInfo.classList.add('weather-detail-info');
    
    const fragment = document.createDocumentFragment();
    fragment.appendChild(detailInfo);

    return fragment;

}

export { createWeatherDetailElements };