 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBxitrv6mAizsbJbOs1D9cL1xZ9hyoj12o",
  authDomain: "kwitter-1-60156.firebaseapp.com",
  projectId: "kwitter-1-60156",
  storageBucket: "kwitter-1-60156.appspot.com",
  messagingSenderId: "291812899829",
  appId: "1:291812899829:web:114d214706dc74a6763ebc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;

      localStorage.setItem("user_name" , user_name);

      window.location = "kwitter_room.html";

  }
