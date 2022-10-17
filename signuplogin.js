// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSyBurL9h7JZszPZYvbjUy92E0YRI81Wk",
  authDomain: "loginsignup-28ffa.firebaseapp.com",
  projectId: "loginsignup-28ffa",
  storageBucket: "loginsignup-28ffa.appspot.com",
  messagingSenderId: "555062907596",
  appId: "1:555062907596:web:6ac967fae2ccda594da869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


document.getElementId("signup").addEventListener("click", function() {
firstname = document.getElementById('firstname').value
lastname  = document.getElementById('lastname').value
email = document.getElementById('email').value
password = document.getElementById('password').value
cpassword = document.getElementById('cpassword').value
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("created");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + errorMessage);
    // ..
  });


//Validating input fields 
// if (validate_email(email) == false || validate_password(password) == false){
//   alert('Email or Password is invalid!!');
//   return;
// }
// if (validate_field (firstname) == false || validate_field(lastname) == false || 
//   validate_field(cpassword) == false) {
//   alert('One or more field is empty!!');
//   return;
// }

// // Authentication
// auth.createUserWithEmailAndPassword(email,password)
// .then(function(){
//   var user = auth.currentUser

//   // Adding user to the Firebase Database
//   var database_ref = database.ref()

//   //Creating user data
//   var user_data = {
//     email : email,
//     firstname : firstname,
//     lastname: lastname,
//     last_login : Date.now()
//   }
 
//   database_ref.child('users/' + user.uid).set(user_data)
 
//   alert('User Created!')})

//   //handles errors:
//   .catch(function(error){
//   // Firebase will let user know about the errors.
//   var error_code = error.code
//   var error_message = error.message

//   alert(error_message)
// })



// }

// ,function validate_email(email){
//   expression = /^[^@]+@\w+(\.\w+)+\w$/

//   if (expression.test(email) == true){
//     //email correct
//     return true;
//   } else{
//     //email incorrect
//     return false;
//   }
// }

// ,function validate_password(password)
// {
//   //password must be six or more
//   if(password < 6){
//     return false;
//   }
//   else{
//     return true;
//   }
}) 