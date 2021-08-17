const fetchTravelWeatherDetailData = jest.fn(async()=>{
        return Promise.resolve({city:'dallas',humidity:60,precip:60,high_temp:32,low_temp:33});
    })

const fetchTravelWeatherDetailErrorData = jest.fn(async()=>{
    return Promise.resolve({error: 'Could not fetch data'});
})    

const fetchWeatherData = ()=>{
    test('Fetch Weather Details with valid value',async()=>{
        const data = await fetchTravelWeatherDetailData();
        expect(data).toEqual({city:'dallas',humidity:60,precip:60,high_temp:32,low_temp:33});
    })

    
    test('Fetch Weather Details with Invalid Value',async()=>{
        const data = await fetchTravelWeatherDetailErrorData();
        expect(data).toEqual({error: 'Could not fetch data'});
    })
}

module.exports = { fetchWeatherData };