const createWeatherDetailElements = (weatherData,datePickerDate)=>{
    
    const fragment = document.createDocumentFragment();

    const weatherDetail = document.createElement('div');

    const location = document.createElement('div');
    let text= `Weather for ${weatherData.city_name}`;
    location.innerHTML = text;
    location.classList.add('weather-detail-location');
    
    const temp = document.createElement('div');
    text = `<h1>${weatherData.data.temp}&deg</h1>`;
    temp.innerHTML = text;
    
    const description = document.createElement('div');
    text = `${weatherData.data.weather.description}`;
    description.innerHTML = text;

    const precip = document.createElement('div');
    text = `Precipitation ${weatherData.data.precip}%`;
    precip.innerHTML = text;

    const humidity = document.createElement('div');
    text = `Humidity ${weatherData.data.rh}%`;
    humidity.innerHTML = text;
    
    const travelDate = document.createElement('div');
    text = `Travel Date ${datePickerDate}`;
    travelDate.innerHTML = text;

    travelDate.classList.add('weather-detail-travel-date')


    const detail = document.createElement('div');
    detail.appendChild(location);
    detail.appendChild(temp);
    detail.appendChild(description);
    detail.appendChild(precip);
    detail.appendChild(humidity);
    detail.appendChild(travelDate);
    
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