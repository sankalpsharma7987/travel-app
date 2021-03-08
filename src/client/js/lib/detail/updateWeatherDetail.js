const $WEATHER_DETAIL_ELEMENT = document.querySelector('.weather-detail');

const updateWeatherDetail = (weatherData)=>{

    const fragment = Client.createWeatherDetailElements(weatherData);
    $WEATHER_DETAIL_ELEMENT.appendChild(fragment);
}

export { updateWeatherDetail };