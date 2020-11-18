import firebase from 'firebase/app';

const fireApp = firebase.initializeApp({
  apiKey: 'AIzaSyDMW5GaAJKWiHFV2OpaJ9-0W97QME3C9eA',
  authDomain: 'pizza-app-d3506.firebaseapp.com',
  databaseURL: 'https://pizza-app-d3506.firebaseio.com',
  projectId: 'pizza-app-d3506',
  storageBucket: 'pizza-app-d3506.appspot.com',
  messagingSenderId: '307170302921',
  appId: '1:307170302921:web:08a116a0d1adfe0db8a618',
});

export default fireApp;
