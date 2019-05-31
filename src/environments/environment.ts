// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false, //todo esto lo saco de la pgina de configuracion de firebase
    firebase: {
      apiKey: "AIzaSyBKG3NVut4CXEJ_tHYRj9uHC6vzeYCLrAY",
      authDomain: "clase10-cc6de.firebaseapp.com",
      databaseURL: "https://clase10-cc6de.firebaseio.com",
      projectId: "clase10-cc6de",
      storageBucket: "clase10-cc6de.appspot.com",
      messagingSenderId: "466920846865",
      appId: "1:466920846865:web:4ae16353e8da91a9"
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
