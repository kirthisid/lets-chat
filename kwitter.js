const firebaseConfig = {
    apiKey: "AIzaSyARFEc68_cmnDPbtiE1W8oMmPSWabWk9RU",
    authDomain: "kwitter-2e135.firebaseapp.com",
    databaseURL: "https://kwitter-2e135-default-rtdb.firebaseio.com",
    projectId: "kwitter-2e135",
    storageBucket: "kwitter-2e135.appspot.com",
    messagingSenderId: "50254883984",
    appId: "1:50254883984:web:1fa55ad37f10ed626b7c15",
    measurementId: "G-JNZPB8QHHD"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function login(){
    username = document.getElementById("uname").value
    localStorage.setItem("username",username)
    // firebase.database().ref("/").child(username).update({purpose:"ADDING NEW USER"})
    window.location="kwitter_room.html"
}