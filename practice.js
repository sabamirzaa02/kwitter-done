
// ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyCKKLSZALW3xwSfxkmYLUso8Lzwre_mpnQ",
  authDomain: "class-test-8207a.firebaseapp.com",
  databaseURL: "https://class-test-8207a-default-rtdb.firebaseio.com",
  projectId: "class-test-8207a",
  storageBucket: "class-test-8207a.appspot.com",
  messagingSenderId: "719241196995",
  appId: "1:719241196995:web:f3311d3999b36f4f6bb976",

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


