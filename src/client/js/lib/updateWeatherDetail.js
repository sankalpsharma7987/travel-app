const $WEATHER_SUMMARY_ELEMENT = document.querySelector('.weather-summary-section');

const updateWeatherDetail = (data)=>{

    data.forEach(
        element => {
            const fragment = Client.createWeatherDetailElements(element);
            $WEATHER_SUMMARY_ELEMENT.appendChild(fragment);
        }

        )



}

export { updateWeatherDetail };