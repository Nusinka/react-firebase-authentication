import app from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAJ81rOvLx7kPAZvrBz2THGLmLpvp4ODVs",
  authDomain: "my-test-app-c7675.firebaseapp.com",
  databaseURL: "https://my-test-app-c7675.firebaseio.com",
  projectId: "my-test-app-c7675",
  storageBucket: "my-test-app-c7675.appspot.com",
  messagingSenderId: "308237509357",
  appId: "1:308237509357:web:9088b825af2150b2"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
  }
}

export default Firebase;
