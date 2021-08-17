const { validateTextFieldResults } = require('./validateTextFields.test.js');
const { fetchWeatherData } = require('./fetchWeatherData.test.js');
const { fetchSavedTrips } = require('./fetchSavedTrips.test.js');
const { routerSavedTrips } = require('./routerSavedTrips.test.js');

describe('Validate test cases for input fields', validateTextFieldResults);
describe('Validate data fetched for weather',fetchWeatherData);
describe('Validate data fetched for Saved Trips',fetchSavedTrips);
describe('Saved Trips test cases',routerSavedTrips);