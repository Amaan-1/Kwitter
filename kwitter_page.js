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


var USERNAME = localStorage.getItem("User_Name");
var ROOM = localStorage.getItem("room_name");

function getData() {
    firebase.database().ref("/" + ROOM).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                console.log(firebase_message_id);
                console.log(message_data);
                var name = message_data["name"];
                var message = message_data["message"];
                var like = message_data["like"];
                var name_tag = "<h4 id='name_display'>" + name + "<img src='tick.png' id='tick_logo'>" + "</h4><br>";
                var message_tag = "<h4 id='message_display'>" + message + "</h4><br>";
                var like_button = "<button id='" + firebase_message_id + "' class='btn btn-info button_like' onclick='update_like(this.id)' value='" + like + "'>";
                var span_tag = "<span class='glyphicon glyphicon-thumbs-up'>" + like + "</button>";
                var row = "<div id='thing'>" + name_tag + message_tag + like_button + span_tag + "</div>";
                document.getElementById("output").innerHTML = row;
            }
        });
    });
}
getData();

function update_like(message_id) {
    console.log("liked" + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_like = Number(likes) + 1;
    console.log(updated_like);
    firebase.database().ref(ROOM).child(message_id).update({
        like: updated_like
    });
}


function send() {
    var msg_input = document.getElementById("msg").value;
    console.log(msg_input);
    firebase.database().ref(ROOM).push({
        name: USERNAME,
        message: msg_input,
        like: 0
    });
    document.getElementById("msg").value = "";
}

function out() {
    localStorage.removeItem("room_name");
    localStorage.removeItem("User_Name");
    window.location = "index.html";
}