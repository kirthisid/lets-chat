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
//ADD YOUR FIREBASE LINKS HERE
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoom(this.id)' >#" + Room_names + "</div><hr>"
                  document.getElementById("output").innerHTML += row

                  //End code
            });
      });
}
getData();

function logout() {

}
function addroom() {
      roomname = document.getElementById("roomname").value
      firebase.database().ref("/").child(roomname).update({ purpose: "ADDING NEW ROOM" })
      localStorage.setItem("roomname", roomname)
      window.location = "kwitter_page.html"

}
username = localStorage.getItem("username")
document.getElementById("username").innerHTML = "Welcome " + username
function redirectToRoom(name) {
      localStorage.setItem("roomname", roomname)
      window.location = "kwitter_page.html"

}