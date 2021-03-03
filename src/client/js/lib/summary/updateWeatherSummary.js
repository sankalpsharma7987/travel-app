const $WEATHER_SUMMARY_ELEMENT = document.querySelector('.weather-summary-section');

const updateWeatherSummary = (data)=>{

    data.forEach(
        element => {
            const fragment = Client.createWeatherSummaryElements(element);
            $WEATHER_SUMMARY_ELEMENT.appendChild(fragment);
        }

        )



}

export { updateWeatherSummary };