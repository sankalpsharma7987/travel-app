/*Client-Side Javascript. 
This helper function is used to render the weather detail section by calling the create weather detail element function and rendering those elements returned.
The elements returned are returned as fragment object which are appended to the weather detail section.
*/

const $WEATHER_DETAIL_ELEMENT = document.querySelector('.weather-detail');
const $WEATHER_DETAIL_SECTION = document.querySelector('.weather-detail-section');

const updateWeatherDetail = (weatherData,startDatePickerValue,endDatePickerValue,tripDuration)=>{

    const fragment = Client.createWeatherDetailElements(weatherData,startDatePickerValue,endDatePickerValue,tripDuration);
    $WEATHER_DETAIL_ELEMENT.appendChild(fragment);
    $WEATHER_DETAIL_SECTION.classList.add('weather-detail-section-background');
    Client.scrollIntoSection('#location-section');
}

export { updateWeatherDetail };