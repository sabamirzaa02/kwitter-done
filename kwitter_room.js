var firebaseConfig = {
      apiKey: "AIzaSyD1MVIqf-CX88HowgP361fa4oVeqddhkTM",
  authDomain: "kwitt-47163.firebaseapp.com",
  databaseURL: "https://kwitt-47163-default-rtdb.firebaseio.com",
  projectId: "kwitt-47163",
  storageBucket: "kwitt-47163.appspot.com",
  messagingSenderId: "528169254195",
  appId: "1:528169254195:web:329d848717e32614171246",
  measurementId: "G-TPQX6WVD4Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
