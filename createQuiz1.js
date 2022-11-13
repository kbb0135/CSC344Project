import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase,set, ref,update,get,child} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
let q1,q2,q3,q4,temp; //for questions
export {temp, temp1,temp2, temp3, temp4, temp5,
    temp6,temp7,temp8,temp9,temp10,temp11,temp12,
    temp13,temp14,temp15,temp16,temp17,temp18,temp19,temp20,
    temp21, temp22,temp23};
//s1 = "How are you";
let o1,o2,o3,o4;    //for question1 options
let oo1, oo2, oo3, oo4; //for question2 options
let ooo1, ooo2, ooo3, ooo4; //for question3 options
let oooo1, oooo2, oooo3, oooo4; //for question4 options
let c1, c2,c3,c4; //for choice options
let l;
let temp1,temp2,temp3,temp4,temp5,temp6,temp7,temp8,temp9,temp10,temp11,temp12,
temp13,temp14,temp15,temp16,temp17,temp18,temp19,temp20,temp21,temp22, temp23;
const firebaseConfig = {
    apiKey: "AIzaSyAIyfmd_5AtYzJdovcVzOZ4F555_fFHEN0",
    authDomain: "admin-d8e2a.firebaseapp.com",
    projectId: "admin-d8e2a",
    storageBucket: "admin-d8e2a.appspot.com",
    messagingSenderId: "521159802193",
    appId: "1:521159802193:web:ff41c81b9033c620b56770"
  };
  
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const dbRef = ref(getDatabase());
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
        const uid = user.uid;
        console.log("here")
            get(child(dbRef, `users/${uid}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    
                  //console.log(snapshot.val());
                  
                  //console.log(temp)
                } else {
                  console.log("No data available");
                }
              }).catch((error) => {
                console.error(error);
              });
})
function quizData() {
//-------------------------------------------------------
temp = localStorage.getItem("test1")
temp1 = localStorage.getItem("test2")
//console.log("temp1= "+temp1)
temp2 = localStorage.getItem("test3")
temp3 = localStorage.getItem("test4")
temp4 = localStorage.getItem("test5")
temp5 = localStorage.getItem("test6")
//--------------------------------------------------------
temp6 = localStorage.getItem("test7")
temp7 = localStorage.getItem("test8")
//console.log("temp1= "+temp1)
temp8 = localStorage.getItem("test9")
temp9 = localStorage.getItem("test10")
temp10 = localStorage.getItem("test11")
temp11 = localStorage.getItem("test12")
//--------------------------------------------------------
temp12 = localStorage.getItem("test13")
temp13 = localStorage.getItem("test14")
//console.log("temp1= "+temp1)
temp14 = localStorage.getItem("test15")
temp15 = localStorage.getItem("test16")
temp16 = localStorage.getItem("test17")
temp17 = localStorage.getItem("test18")
//--------------------------------------------------------
temp18 = localStorage.getItem("test19")
temp19 = localStorage.getItem("test20")
//console.log("temp1= "+temp1)
temp20 = localStorage.getItem("test21")
temp21 = localStorage.getItem("test22")
temp22 = localStorage.getItem("test23")
temp23 = localStorage.getItem("test24")
console.log("temp5="+temp5)
console.log(localStorage.getItem("test6"))
//--------------------------------------------------------
}
quizData();
document.getElementById('submit').addEventListener('click', function(){
    q1 = document.getElementById('question1')?.value;
    o1 = document.getElementById('opt1')?.value;
    o2 = document.getElementById('opt2')?.value;
    o3 = document.getElementById('opt3')?.value;
    o4 = document.getElementById('opt4')?.value;
    c1 = document .getElementById('choice1')?.value;

    q2 = document.getElementById('question2')?.value;
    oo1 = document.getElementById('2opt1')?.value;
    oo2 = document.getElementById('2opt2')?.value;
    oo3 = document.getElementById('2opt3')?.value;
    oo4 = document.getElementById('2opt4')?.value;
    c2 = document .getElementById('choice2')?.value;

    q3 = document.getElementById('question3')?.value;
    ooo1 = document.getElementById('3opt1')?.value;
    ooo2 = document.getElementById('3opt2')?.value;
    ooo3 = document.getElementById('3opt3')?.value;
    ooo4 = document.getElementById('3opt4')?.value;
    c3 = document .getElementById('choice3')?.value;

    q4 = document.getElementById('question4')?.value;
    oooo1 = document.getElementById('4opt1')?.value;
    oooo2 = document.getElementById('4opt2')?.value;
    oooo3 = document.getElementById('4opt3')?.value;
    oooo4 = document.getElementById('4opt4')?.value;
    c4 = document .getElementById('choice4')?.value;

    
    
      onAuthStateChanged(auth, (user) => {
        if(user) {
            const uid = user.uid;
            update(ref(database, 'users/'+user.uid),{
                question1: q1,
                a:o1,
                b:o2,
                c:o3,
                d:o4,
                correctAns:c1,

                question2: q2,
                e:o1,
                f:o2,
                g:o3,
                h:o4,
                correctAns1:c2,

                question3: q3,
                i:o1,
                j:o2,
                k:o3,
                l:o4,
                correctAns2:c3,
                
                question4: q4,
                m:o1,
                n:o2,
                o:o3,
                p:o4,
                correctAns3:c4


            })
            console.log("here")
            get(child(dbRef, `users/${uid}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    localStorage.setItem("test1", snapshot.val().question1)
                    localStorage.setItem("test2", snapshot.val().a)
                    localStorage.setItem("test3", snapshot.val().b)
                    localStorage.setItem("test4", snapshot.val().c)
                    localStorage.setItem("test5", snapshot.val().d)
                    localStorage.setItem("test6", snapshot.val().correctAns)
    //--------------------------------------------------------------------------------------------------------------------------------
                    localStorage.setItem("test7", snapshot.val().question2)
                    localStorage.setItem("test8", snapshot.val().e)
                    localStorage.setItem("test9", snapshot.val().f)
                    localStorage.setItem("test10", snapshot.val().g)
                    localStorage.setItem("test11", snapshot.val().h)
                    localStorage.setItem("test12", snapshot.val().correctAns1)
    
    //--------------------------------------------------------------------------------------------------------------------------------
                    localStorage.setItem("test13", snapshot.val().question3)
                    localStorage.setItem("test14", snapshot.val().i)
                    localStorage.setItem("test15", snapshot.val().j)
                    localStorage.setItem("test16", snapshot.val().k)
                    localStorage.setItem("test17", snapshot.val().l)
                    localStorage.setItem("test18", snapshot.val().correctAns2)

    //--------------------------------------------------------------------------------------------------------------------------------
                    localStorage.setItem("test19", snapshot.val().question4)
                    localStorage.setItem("test20", snapshot.val().m)
                    localStorage.setItem("test21", snapshot.val().n)
                    localStorage.setItem("test22", snapshot.val().o)
                    localStorage.setItem("test23", snapshot.val().p)
                    localStorage.setItem("test24", snapshot.val().correctAns3)




                } else {
                  console.log("No data available");
                }
              }).catch((error) => {
                console.error(error);
              });
        }
        else {
            console.log("Something went wrong");
        }
      })
    quizData();  
})


