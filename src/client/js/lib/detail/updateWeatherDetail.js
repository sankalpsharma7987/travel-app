const $WEATHER_DETAIL_ELEMENT = document.querySelector('.weather-detail');

const updateWeatherDetail = (weatherData,datePickerDate)=>{

    const fragment = Client.createWeatherDetailElements(weatherData,datePickerDate);
    $WEATHER_DETAIL_ELEMENT.appendChild(fragment);
}

export { updateWeatherDetail };