/* A server side object created to save trip details. Each trip will have properties as follows
Location
Start Date
End Date
Trip Duration.
At every restart of express server instance, the object will be re-instatiated.
*/

let savedTrips = {};

module.exports = savedTrips;