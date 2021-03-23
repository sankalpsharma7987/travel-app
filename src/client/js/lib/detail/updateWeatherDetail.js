const $WEATHER_DETAIL_ELEMENT = document.querySelector('.weather-detail');
const $WEATHER_DETAIL_SECTION = document.querySelector('.weather-detail-section');

const updateWeatherDetail = (weatherData,startDatePickerValue,endDatePickerValue,tripDuration)=>{

    const fragment = Client.createWeatherDetailElements(weatherData,startDatePickerValue,endDatePickerValue,tripDuration);
    $WEATHER_DETAIL_ELEMENT.appendChild(fragment);
    $WEATHER_DETAIL_SECTION.classList.add('weather-detail-section-background');
}

export { updateWeatherDetail };