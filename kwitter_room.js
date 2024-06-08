
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAaLDhHRssVe-w-OO090UsA2DzwdnBwgeY",
      authDomain: "kwitter-9264b.firebaseapp.com",
      databaseURL: "https://kwitter-9264b-default-rtdb.firebaseio.com",
      projectId: "kwitter-9264b",
      storageBucket: "kwitter-9264b.appspot.com",
      messagingSenderId: "513940114533",
      appId: "1:513940114533:web:b389cca5f4b2f22927ca8c"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
