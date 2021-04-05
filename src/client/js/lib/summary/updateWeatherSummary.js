const $WEATHER_SUMMARY_ELEMENT = document.querySelector('.weather-summary-section');

/*Client-Side Javascript
This helper function is used to the update weather summary by calling the createWeathersummary element for each data object
and then appending the returned fragment of data in weather summary section.
*/

const updateWeatherSummary = (data)=>{

    data.forEach(
        element => {
            const fragment = Client.createWeatherSummaryElements(element);
            $WEATHER_SUMMARY_ELEMENT.appendChild(fragment);
        }

        )



}

export { updateWeatherSummary };