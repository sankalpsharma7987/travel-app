/*Client-Side Javascript. Helper function to calculate difference in the days when two dates, in the form of strings, is passed as an argument to this function.
This function is called by other client side javascript functions */

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
    const timeDiff = futureDateUTC-currentDateUTC;

    const resultVal = timeDiff/timeConstant;
    const result = Math.floor(resultVal);
    return result;
       
}

module.exports = { calculateDateDiffDays };