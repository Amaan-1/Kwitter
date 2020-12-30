var firebaseConfig = {
    apiKey: "AIzaSyBEGD1_QsFWvQNBg_B8UcMBDgrVWwAVtoY",
    authDomain: "kwitter-6e092.firebaseapp.com",
    projectId: "kwitter-6e092",
    storageBucket: "kwitter-6e092.appspot.com",
    messagingSenderId: "675024517745",
    appId: "1:675024517745:web:f298cc70915140787ab9d0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();