const request = require('supertest');
const { app } = require('../src/server/app');
const { requestData,responseData,errorMessage,matchErrorMessage } = require('./fixtures/savedTripsValue.js');

const routerSavedTrips = ()=>{
    test('Should fetch error message for no saved trips',async()=>{
        const data = await request(app).get('/fetchTrip');
        expect(data.body).toEqual(errorMessage);

    })

    test('Should save trips',async()=>{
        
        const data = await request(app).post('/saveTrip').send(requestData).expect(200);
        expect(data.body).toEqual(responseData);

    })

    test('Should return saved trips after trip is saved',async()=>{
        const data = await request(app).get('/fetchTrip');
        expect(data.body).toEqual(responseData);
    })

    test('Should delete trips',async()=>{
        const data = await request(app).delete('/deleteTrip?id=-11').send(requestData).expect(200);
        expect(data.body).toEqual(matchErrorMessage);
    })

    test('Should send error message for invalid id',async()=>{
        const data = await request(app).delete('/deleteTrip?id=1100').send(requestData).expect(200);
        expect(data.body).toEqual(matchErrorMessage);
    })

    test('Should send error message after the saved data is deleted',async()=>{
        const data = await request(app).delete('/deleteTrip?id=1').send(requestData).expect(200);
        expect(data.body).toEqual(errorMessage);
    })
}

module.exports = { routerSavedTrips };