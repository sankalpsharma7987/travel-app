const createWeatherSummaryElements = (data)=>{

    const fragment = document.createDocumentFragment();

    const weatherSummary = document.createElement('div');
    let text = '';

    const date = document.createElement('div');
    text = `${data.valid_date.substring(5,7)}/${data.valid_date.substring(8)}`;
    date.innerHTML = text;
    date.classList.add('weather-summary-date');

    const temp = document.createElement('div');
    text = `${data.min_temp}&deg/${data.max_temp}&deg`;
    temp.innerHTML = text;
    temp.classList.add('weather-summary-temp');

    const clouds = document.createElement('div');
    text = `Cloud Cover &nbsp</b> ${data.clouds} %`;
    clouds.innerHTML  = text;
    clouds.classList.add('weather-summary-cloud');

    const precip = document.createElement('div');
    text = `${data.precip} % chance of Precipiation`;
    precip.innerHTML = text;
    precip.classList.add('weather-summary-precip');
        
    
    const weatherDescription = document.createElement('div');
    text = `${data.weather.description}`;
    weatherDescription.innerHTML = text;
    weatherDescription.classList.add('weather-description');

    const weatherImage = document.createElement('div');
    text = `<img src=https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png>`;
    weatherImage.innerHTML = text;
    
    const weatherSummaryDescription = document.createElement('div');
    weatherSummaryDescription.appendChild(weatherImage);
    weatherSummaryDescription.appendChild(weatherDescription);

    weatherSummaryDescription.classList.add('weather-summary-description');
    weatherSummary.classList.add('weather-summary');

    weatherSummary.appendChild(date);
    weatherSummary.appendChild(temp);
    weatherSummary.appendChild(weatherSummaryDescription);
    weatherSummary.appendChild(clouds);
    weatherSummary.appendChild(precip);

    fragment.appendChild(weatherSummary);

    return fragment;

}

export { createWeatherSummaryElements };