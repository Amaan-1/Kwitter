var firebaseConfig = {
    apiKey: "AIzaSyBEGD1_QsFWvQNBg_B8UcMBDgrVWwAVtoY",
    authDomain: "kwitter-6e092.firebaseapp.com",
    databaseURL: "https://kwitter-6e092-default-rtdb.firebaseio.com",
    projectId: "kwitter-6e092",
    storageBucket: "kwitter-6e092.appspot.com",
    messagingSenderId: "675024517745",
    appId: "1:675024517745:web:f298cc70915140787ab9d0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log(Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();


function redirectToRoomName(room_name) {
    console.log(room_name);
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}


var username = localStorage.getItem("User_Name");
document.getElementById("user_indentity").innerHTML = "Welcome " + username + "!";

function add() {
    var room_name = document.getElementById("add_room").value;
    console.log(room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose: "add_room"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function out() {
    localStorage.removeItem("add_room");
    localStorage.removeItem("User_Name");
    window.location = "index.html";
}