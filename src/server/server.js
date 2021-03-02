const express = require('express');
const app = express();
// const cors = require('cors');
const path = require('path');
const geoName = require('./lib/geoName')
const mockWeatherBitAPI = require('./lib/weatherBit');
const mockGeoNameAPI = require('./lib/geoName');
const port = process.env.PORT;

// const publicDirectoryPath = path.join(__dirname,'../client')
const publicDirectoryPath = './dist';

app.use(express.static(publicDirectoryPath));
// app.use(cors());

app.get('/',(req,res)=>{
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/travel',(req,res)=>{

    mockGeoNameAPI(req.query.address,(error,{latitude,longitude}={})=>{

        if(error)
        {
            res.send({error});
        }

        else {
            mockWeatherBitAPI({latitude,longitude},req.query.weather,(error,data)=>{
                if(error)
                {
                    res.send({error})
                }
                else {
                    res.send(data);
                }


                })

            }


    })
    
})


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})
