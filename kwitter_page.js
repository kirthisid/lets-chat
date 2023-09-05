//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyARFEc68_cmnDPbtiE1W8oMmPSWabWk9RU",
    authDomain: "kwitter-2e135.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-35d7a-rtdb.firebaseio.com",
    projectId: "kwitter-2e135",
    storageBucket: "kwitter-2e135.appspot.com",
    messagingSenderId: "50254883984",
    appId: "1:50254883984:web:1fa55ad37f10ed626b7c15",
    measurementId: "G-JNZPB8QHHD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("username")
roomname=localStorage.getItem("roomname")
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function logout() {
    localStorage.removeItem("username")
    localStorage.removeItem("roomname")
    window.location = "index.html"
}
function send(){
    msg=document.getElementById("msg").value
    document.getElementById("msg").value=""
    firebase.database().ref(roomname).push({
          name:username,message:msg,like:0
    });
}
