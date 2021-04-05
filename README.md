Travel App

Description
This project is made with HTML, CSS and JavaScript, as part of the Udacity Front-Developer Nano-Degree Program.
Following API are used for this project

 https://api.weatherbit.io/v2.0/forecast/daily
 https://api.weatherbit.io/v2.0/current
 http://api.geonames.org/searchJSON
 'https://api.meaningcloud.com/sentiment-2.1'
 'https://pixabay.com/api/'
 'https://restcountries.eu/rest/v2/alpha/'


General info
The project fetches destination name, start date and end date of the trip and in return shares weather information(current weather details and forecast of the next 15 days) from Weather Bit API.
The free-version of the WeatherBit API has option to pull forecast of 15 days and hence the trip end-date cannot be choose 15 days from the current date.
It also fetches the destination of the image from the PixaBay API. If the image of the destination is not fetched, it will fetch the flag of the country from the RestCountries API.
User can then save the trip details. The saved trip will have start date, location name and the number of days remaining for the trip.

Project Behavior

Following are the features implemented

- Add end date and display length of trip.
- Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities).
- Allow the user to remove the trip.
- Instead of just pulling a single day forecast, pull the forecast for multiple days.
- Incorporate weather icons into forecast from Weather Bit API.
- Location Image is enlarged in a modal when clicked
- Navigation Hamburger replaces the navigation section for small screen resolutions.