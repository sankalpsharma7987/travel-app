const express=require('express');
const app = express();
// const cors = require('cors');
const weatherForecastRouter = require('./routers/weatherForecastRouter');
const imageRouter = require('./routers/imageRouter');
const savedItemsRouter = require('./routers/savedTripsRouter')

//Below line will automatically parse the incoming JSON to an object
app.use(express.json())

const publicDirectoryPath = './dist';

app.use(express.static(publicDirectoryPath));
// app.use(cors());

//Register the routers defined
app.use(weatherForecastRouter);
app.use(imageRouter);
app.use(savedItemsRouter);

module.exports = { app };