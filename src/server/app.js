const express = require('express');
const app = express();
const cors = require('cors');
const weatherForecastRouter = require('./routers/weatherForecastRouter');
const imageRouter = require('./routers/imageRouter');
const savedItemsRouter = require('./routers/savedTripsRouter')
const htmlRouter = require('./routers/htmlRouter');

//Below line will automatically parse the incoming JSON to an object
app.use(express.json())

const publicDirectoryPath = './dist';

app.use(express.static(publicDirectoryPath));
app.use(cors()); //CORS is enabled in order to allow user to send cross origin request.

//Register the routers defined
app.use(weatherForecastRouter);
app.use(imageRouter);
app.use(savedItemsRouter);
app.use(htmlRouter);

module.exports = { app };