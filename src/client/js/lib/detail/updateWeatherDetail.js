const $WEATHER_DETAIL_ELEMENT = document.querySelector('.weather-detail');

const updateWeatherDetail = (weatherData,startDatePickerValue,endDatePickerValue,tripDuration)=>{

    const fragment = Client.createWeatherDetailElements(weatherData,startDatePickerValue,endDatePickerValue,tripDuration);
    $WEATHER_DETAIL_ELEMENT.appendChild(fragment);
}

export { updateWeatherDetail };