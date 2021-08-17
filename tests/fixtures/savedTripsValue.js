const requestData = {
    "location": "Dallas",
    "startDate": "2021-03-11",
    "endDate":"2021-03-16",
    "tripDuration":"Trip Duration 5 days"

}

const responseData = {
    "1": {
        "location": "Dallas",
        "startDate": "2021-03-11",
        "endDate": "2021-03-16",
        "tripDuration": "Trip Duration 5 days",
        "id": 1
    }
}

const errorMessage = {error:'No trips saved'};

const matchErrorMessage = {error:'No match found'};

module.exports = { requestData,responseData,errorMessage,matchErrorMessage };