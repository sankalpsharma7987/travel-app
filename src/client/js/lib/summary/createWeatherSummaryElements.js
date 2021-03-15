const createWeatherSummaryElements = (data)=>{

    const fragment = document.createDocumentFragment();

    const weatherSummary = document.createElement('div');
    let text = '';

    const date = document.createElement('div');
    text = `${data.valid_date.substring(5,7)}/${data.valid_date.substring(8)}`;
    date.innerHTML = text;
    date.classList.add('weather-summary-date','weather-summary-display');

    const temp = document.createElement('div');
    text = `${data.min_temp}&deg/${data.max_temp}&deg`;
    temp.innerHTML = text;
    temp.classList.add('weather-summary-temp','weather-summary-display');

    const clouds = document.createElement('div');
    text = `Cloud Cover </b> ${data.clouds} %`;
    clouds.innerHTML  = text;
    clouds.classList.add('weather-summary-cloud','weather-summary-display');

    const precip = document.createElement('div');
    text = `${data.precip} % chance of Precipiation`;
    precip.innerHTML = text;
    precip.classList.add('weather-summary-precip','weather-summary-display');
        
    
    const weatherDescription = document.createElement('div');
    text = `${data.weather.description}`;
    weatherDescription.innerHTML = text;
    weatherDescription.classList.add('weather-description');

    const weatherImage = document.createElement('div');

    const image = document.createElement('img');
    text = `https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`;
    image.setAttribute('src',text);
    image.classList.add('weather-summary-image');
    weatherImage.appendChild(image);
    
    
    const weatherSummaryDescription = document.createElement('div');
    weatherSummaryDescription.appendChild(weatherImage);
    weatherSummaryDescription.appendChild(weatherDescription);

    weatherSummaryDescription.classList.add('weather-summary-description','weather-summary-display');
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