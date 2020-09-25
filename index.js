// index.js

// const { fetchMyIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });




// const { fetchCoordsByIP } = require('./iss');
// //we need 2 arguements: the ip address and the callback
// fetchCoordsByIP('76.68.115.71', (error, coordinates) => {
//     if (error) {
//       console.log("It didn't work!" , error);
//       return;
//     }
  
//     console.log('It worked! Returned coordinates:' , coordinates);
//   });




// The code below is temporary and can be commented out.
const { fetchISSFlyOverTimes } = require('./iss');

const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , passTimes);
});



