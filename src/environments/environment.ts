// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD5r1TSSTwv71qW2wW6qjRhL0c5pb1bMCE",
    authDomain: "spotify-app-280cb.firebaseapp.com",
    projectId: "spotify-app-280cb",
    storageBucket: "spotify-app-280cb.appspot.com",
    messagingSenderId: "37020111773",
    appId: "1:37020111773:web:e7253dba7f77194dc2d574",
    measurementId: "G-F2SMVZDD2Y"
  },
  spotify: {
    grant_type: 'client_credentials',
    client_id: '765d2fa04ae84aeeb2cd26489d541f5b',
    cliente_secret: 'c47a3498d17342649908b3f0918e3c02',
    urlToken: 'https://accounts.spotify.com/api/token',
    url: 'https://api.spotify.com/v1/'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
