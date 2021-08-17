const fetchSavedTripsValidData = jest.fn(async()=>{
    return Promise.resolve({location: 'dallas',startDate:'2021-01-23',endDate:'2021-01-25'});
})

const fetchSavedTripsNoResult = jest.fn(async()=>{
    return Promise.resolve({message:'No trips saved'});
})
const fetchSavedTrips = ()=>{
    test('Fetch Saved Trips with Valid Result',async()=>{
        const data = await fetchSavedTripsValidData();
        expect(data).toEqual({location: 'dallas',startDate:'2021-01-23',endDate:'2021-01-25'})
    });
    test('Fetch Saved Trips with no results',async()=>{
        const data = await fetchSavedTripsNoResult();
        expect(data).toEqual({message:'No trips saved'});
    });
}

module.exports = { fetchSavedTrips };