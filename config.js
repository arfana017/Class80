//import firebase from 'firebase';
//require('@firebase/firestore')
/*import firebase from '@firebase/app'; 


//import firebase from 'firebase';
require('@firebase/firestore')
import '@firebase/firestore'
  const firebaseConfig = { 
apiKey: "AIzaSyD2uPxYxJ13QLkzQCZ9rte8LGtRZ_1mUjM", 
authDomain: "booksanta2-e63b0.firebaseapp.com", 
databaseURL: "https://booksanta2-e63b0.firebaseio.com",
projectId: "booksanta2-e63b0", 
storageBucket: "booksanta2-e63b0.appspot.com", 
messagingSenderId: "541869278204", 
appId: "1:541869278204:web:810983680021a7d64c2879", 
measurementId: "G-3B13P3KRMF" 
};
  // Initialize Firebase
 
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  
  export default firebase.firestore();

*/

import firebase from 'firebase';
//require('@firebase/firestore')
//import firebase from '@firebase/app'; 


//import firebase from 'firebase';
require('@firebase/firestore')
import '@firebase/firestore'
/*
const firebaseConfig = {
  apiKey: "AIzaSyBc-5Cc0WD5-Z5zMwyc5dhLJO9Z__RPvkk",
  authDomain: "booksanta-c1088.firebaseapp.com",
  databaseURL: "https://booksanta-c1088.firebaseio.com",
  projectId: "booksanta-c1088",
  storageBucket: "booksanta-c1088.appspot.com",
  messagingSenderId: "442305870837",
  appId: "1:442305870837:web:cf3f728a80c965df1fbebc",
  measurementId: "G-RS1ZQXPMFH"
};
*/

const firebaseConfig = { 
apiKey: "AIzaSyD2uPxYxJ13QLkzQCZ9rte8LGtRZ_1mUjM", 
authDomain: "booksanta2-e63b0.firebaseapp.com", 
databaseURL: "https://booksanta2-e63b0.firebaseio.com",
projectId: "booksanta2-e63b0", 
storageBucket: "booksanta2-e63b0.appspot.com", 
messagingSenderId: "541869278204", 
appId: "1:541869278204:web:810983680021a7d64c2879", 
measurementId: "G-3B13P3KRMF" 
};



// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();