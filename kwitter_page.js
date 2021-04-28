//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyD4fi89Xoj4_py_lOB52GmtOE9zxHHSHn4",
      authDomain: "kwitterapp-dabd7.firebaseapp.com",
      databaseURL: "https://kwitterapp-dabd7-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-dabd7",
      storageBucket: "kwitterapp-dabd7.appspot.com",
      messagingSenderId: "1006678142041",
      appId: "1:1006678142041:web:0e7c038b84c1a2e383d548"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }
getData();
user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")

function Logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location = "index.html"
};

function Send(){
      msg = document.getElementById("msg").value; firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 }); document.getElementById("msg").value = "";
};