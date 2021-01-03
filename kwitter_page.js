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
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();


var USERNAME = localStorage.getItem("User_Name");
var ROOM = localStorage.getItem("add_room");

function send() {
    var msg = document.getElementById("msg").value;
    console.log(msg);
    firebase.database().ref(ROOM).push({
        name: USERNAME,
        messasge: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}

function out() {
    localStorage.removeItem("add_room");
    localStorage.removeItem("User_Name");
    window.location = "index.html";
}