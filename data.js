var firebaseConfig = {
    apiKey: "AIzaSyBeJ7Ajmin2pB0-THO5mcN3tXWBK1rz6k0",
    authDomain: "signup-and-login-7f478.firebaseapp.com",
    projectId: "signup-and-login-7f478",
    storageBucket: "signup-and-login-7f478.appspot.com",
    messagingSenderId: "377046865848",
    appId: "1:377046865848:web:d3e937e55781c29856614d",
    measurementId: "G-04YZ0B1N7Y"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics(app);

  var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('emailid').value;
var password = document.getElementById('passwordid').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('emailid').value;
    var password = document.getElementById('passwordid').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('username'),
        email : getId('emailid'),
        password : getId('passwordid')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}

