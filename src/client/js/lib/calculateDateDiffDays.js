const calculateDateDiffDays = (currentDateString,futureDateString)=>{

    const currentDate = new Date(currentDateString);
    const futureDate = new Date(futureDateString);
    
    const currentDateUTC = Date.UTC(
        currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate()
    )

    const futureDateUTC = Date.UTC(
        futureDate.getFullYear(),futureDate.getMonth(),futureDate.getDate()
    )

    const timeConstant = 1000 * 60 * 60 * 24;

    return Math.floor ((futureDateUTC-currentDateUTC)/timeConstant);
       
}

module.exports = { calculateDateDiffDays };