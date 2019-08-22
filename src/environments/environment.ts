// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   firebaseConfig : {
    apiKey: "AIzaSyBNBwXm0Fs-6SCeDeQ8aW1LpLc5U_DUg4g",
    authDomain: "nathan-qwqaix.firebaseapp.com",
    databaseURL: "https://nathan-qwqaix.firebaseio.com",
    projectId: "nathan-qwqaix",
    storageBucket: "nathan-qwqaix.appspot.com",
    messagingSenderId: "548682874331",
    appId: "1:548682874331:web:2efe148a127b0744"
  },
  dialogflow: {
    angularBot: '97c5fce73eab428fb84a08728296d66a'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
