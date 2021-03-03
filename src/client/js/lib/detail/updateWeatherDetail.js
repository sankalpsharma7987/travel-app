const $WEATHER_DETAIL_ELEMENT = document.querySelector('.weather-detail-section');

const updateWeatherDetail = (data)=>{
    // console.log(data);
    // data.forEach(
    //     element => {
    //         const fragment = Client.createWeatherDetailElements(element);
    //         $WEATHER_DETAIL_ELEMENT.appendChild(fragment);
    //     }

    //     )

    const fragment = Client.createWeatherDetailElements(data);
    $WEATHER_DETAIL_ELEMENT.appendChild(fragment);



}

export { updateWeatherDetail };