/*The values in the key property are actually the sentiment scores shared by MeaningCloud API.
This array is used in the other server side code to give a string value to these sentiment score.
Refer to the meaning cloud api error codes. https://www.meaningcloud.com/developer/documentation/error-codes*/

const scoreTagArray = [

    {key:'P+',value:'Strong Positive'},
    {key:'P',value:'Positive'},
    {key:'NEU',value:'Neutral'},
    {key:'N',value:'Negative'},
    {key:'N+',value:'Strong Negative'},
    {key:'NONE',value:'Without Sentiments'}
    
]

module.exports = scoreTagArray;