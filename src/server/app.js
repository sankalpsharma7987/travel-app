const express=require('express');
const app = express();
// const cors = require('cors');
const router = require('./routers/router');

//Below line will automatically parse the incoming JSON to an object
app.use(express.json())

//Register the routers defined
app.use(router);

const publicDirectoryPath = './dist';

app.use(express.static(publicDirectoryPath));
// app.use(cors());

module.exports={app}





