// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const firebaseConfig = {
  apiKey: "AIzaSyBhfT2c5X0G44Ma3JMyvdiv1PYw8shKwas",
  authDomain: "water-tank-99673.firebaseapp.com",
  databaseURL: "https://water-tank-99673-default-rtdb.firebaseio.com",
  projectId: "water-tank-99673",
  storageBucket: "water-tank-99673.appspot.com",
  messagingSenderId: "751194176298",
  appId: "1:751194176298:web:12aa61a78853086773bc53",
  measurementId: "G-THB1WYE4H2"
};

export const environment = {
  production: false,
  firebase: firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
