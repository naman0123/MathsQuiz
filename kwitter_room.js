const config = {
    apiKey: "AIzaSyBtsi9E4yjpTa6JGyC_iB1YUOtsn2MUapw",
  authDomain: "letschat-8d407.firebaseapp.com",
  databaseURL: "https://letschat-8d407-default-rtdb.firebaseio.com",
  projectId: "letschat-8d407",
  storageBucket: "letschat-8d407.appspot.com",
  messagingSenderId: "232370649863",
  appId: "1:232370649863:web:c79f9d8c2eda912a26a3a2"
  };
  
  // Initialize Firebase
firebase.initializeApp(config);

function init()
{
    let username = localStorage.getItem("userName");
    document.getElementById("login_statement").innerHTML = "Hi, " + username + "!";
}