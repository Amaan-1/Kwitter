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

function login() {
    var username = document.getElementById("user_name").value;
    console.log(username);
    firebase.database().ref("/").child(username).update({ purpose: "adding_user" });
    window.location = "kwitter_room.html";
}