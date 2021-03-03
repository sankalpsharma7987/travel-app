const $WEATHER_SUMMARY_ELEMENT = document.querySelector('.weather-summary-section');

const showWeatherSummary = (flag)=>{


    if(flag)
    {
        $WEATHER_SUMMARY_ELEMENT.classList.remove('hide-weather-summary')
        $WEATHER_SUMMARY_ELEMENT.classList.add('show-weather-summary');
    }

    else
    {
        $WEATHER_SUMMARY_ELEMENT.classList.add('hide-weather-summary')
        $WEATHER_SUMMARY_ELEMENT.classList.remove('show-weather-summary');
    }

}

export { showWeatherSummary };