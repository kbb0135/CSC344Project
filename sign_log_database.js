
var firebaseConfig = {
  apiKey: "AIzaSyCSyBurL9h7JZszPZYvbjUy92E0YRI81Wk",
  authDomain: "loginsignup-28ffa.firebaseapp.com",
  projectId: "loginsignup-28ffa",
  storageBucket: "loginsignup-28ffa.appspot.com",
  messagingSenderId: "555062907596",
  appId: "1:555062907596:web:6ac967fae2ccda594da869"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  //Initializing variables
const auth = firebase.auth()
const database = firebase.database()

  //setting up signup function
function signup(){
  //prem
  
//Getting all the input fields
firstname = document.getElementById('firstname').value
lastname  = document.getElementById('lastname').value
email = document.getElementById('email').value
password = document.getElementById('password').value
cpassword = document.getElementById('cpassword').value


//Validating input fields 
if (validate_email(email) == false || validate_password(password) == false){
  alert('Email or Password is invalid!!')
  return
}
if (validate_field (firstname) == false || validate_field(lastname) == false || 
  validate_field(cpassword) == false) {
  alert('One or more field is empty!!')
  return
}

// Authentication
auth.createUserWithEmailAndPassword(email,password)
.then(function(){
  var user = auth.currentUser

  // Adding user to the Firebase Database
  var database_ref = database.ref()

  //Creating user data
  var user_data = {
    email : email,
    firstname : firstname,
    lastname: lastname,
    last_login : Date.now()
  }
 
  database_ref.child('users/' + user.uid).set(user_data)
 
  alert('User Created!')})

  //handles errors:
  .catch(function(error){
  // Firebase will let user know about the errors.
  var error_code = error.code
  var error_message = error.message

  alert(error_message)
})




}

function validate_email(email){
  expression = /^[^@]+@\w+(\.\w+)+\w$/

  if (expression.test(email) == true){
    //email correct
    return true;
  } else{
    //email incorrect
    return false;
  }
}

function validate_password(password)
{
  //password must be six or more
  if(password < 6){
    return false;
  }
  else{
    return true;
  }
}

function validate_field(field){
  if(field == null){
    return false
  }

  if(field.length <= 0){
    return false
  }
  else{
    return true
  }
}