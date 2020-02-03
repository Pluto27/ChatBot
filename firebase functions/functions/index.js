const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {



 response.send("Hello from Pluto!");


});

exports.helloWorldTwo = functions.https.onRequest((request, response) => {



    response.send("Hello2 again from Pluto!");
   
   
   });
   exports.helloWorldThree = functions.https.onRequest((request, response) => {



    response.send("Hello3 from Pluto!");
   
   
   });
