
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase,set, ref,update,get,child, onValue} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getFirestore,doc,collection,getDoc,setDoc,addDoc} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

let q1,q2,q3,q4,temp; //for questions
// export {temp, temp1,temp2, temp3, temp4, temp5,
//     temp6,temp7,temp8,temp9,temp10,temp11,temp12,
//     temp13,temp14,temp15,temp16,temp17,temp18,temp19,temp20,
//     temp21, temp22,temp23};
//s1 = "How are you";
let o1,o2,o3,o4;    //for question1 options
let p1, p2, p3, p4; //for question2 options
let r1, r2, r3, r4; //for question3 options
let s1,s2,s3,s4; //for question4 options
let c1, c2,c3,c4; //for choice options
let l;
// let temp1,temp2,temp3,temp4,temp5,temp6,temp7,temp8,temp9,temp10,temp11,temp12,
// temp13,temp14,temp15,temp16,temp17,temp18,temp19,temp20,temp21,temp22, temp23;
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
  const db1 = getFirestore();
  //export default !firebase.app.length?firebase.initializeApp(firebaseConfig):firebase.app();

document.getElementById('submit').addEventListener('click', function(){
    q1 = document.getElementById('question1')?.value;
    o1 = document.getElementById('opt1')?.value;
    o2 = document.getElementById('opt2')?.value;
    o3 = document.getElementById('opt3')?.value;
    o4 = document.getElementById('opt4')?.value;
    c1 = document .getElementById('choice1')?.value;
    //checker(c1);
    q2 = document.getElementById('question2')?.value;
    p1 = document.getElementById('2opt1')?.value;
    p2 = document.getElementById('2opt2')?.value;
    p3 = document.getElementById('2opt3')?.value;
    p4 = document.getElementById('2opt4')?.value;
    c2 = document .getElementById('choice2')?.value;
    //checker(c2);
    q3 = document.getElementById('question3')?.value;
    r1 = document.getElementById('3opt1')?.value;
    r2 = document.getElementById('3opt2')?.value;
    r3 = document.getElementById('3opt3')?.value;
    r4 = document.getElementById('3opt4')?.value;
    c3 = document .getElementById('choice3')?.value;
    //checker(c3);
    q4 = document.getElementById('question4')?.value;
    s1 = document.getElementById('4opt1')?.value;
    s2 = document.getElementById('4opt2')?.value;
    s3 = document.getElementById('4opt3')?.value;
    s4 = document.getElementById('4opt4')?.value;
    c4 = document .getElementById('choice4')?.value;
    //checker(c4);
    
      onAuthStateChanged(auth, (user) => {

        async function f1() {
          await setDoc(doc(db1,"Quizes", "Quiz3"),{
            question1: q1,
            a:o1,
            b:o2,
            c:o3,
            d:o4,
            correctAns:c1,

            question2: q2,
            e:p1,
            f:p2,
            g:p3,
            h:p4,
            correctAns1:c2,

            question3: q3,
            i:r1,
            j:r2,
            k:r3,
            l:r4,
            correctAns2:c3,

            question4: q4,
            m:s1,
            n:s2,
            o:s3,
            p:s4,
            correctAns3:c4


          });
          }
          f1();
          console.log("Firestore I am here");

        if(user) {
            //const uid = user.uid;
            update(ref(database, 'Quiz3/'+user.uid),{
                question1: q1,
                a:o1,
                b:o2,
                c:o3,
                d:o4,
                correctAns:c1,

                question2: q2,
                e:p1,
                f:p2,
                g:p3,
                h:p4,
                correctAns1:c2,

                question3: q3,
                i:r1,
                j:r2,
                k:r3,
                l:r4,
                correctAns2:c3,

                question4: q4,
                m:s1,
                n:s2,
                o:s3,
                p:s4,
                correctAns3:c4


            })
            console.log("here")
    //       get(child(dbRef, `users/${uid}`)).then((snapshot) => {
    //             if (snapshot.exists()) {
    //                 localStorage.setItem("test1", snapshot.val().question1)
    //                 localStorage.setItem("test2", snapshot.val().a)
    //                 localStorage.setItem("test3", snapshot.val().b)
    //                 localStorage.setItem("test4", snapshot.val().c)
    //                 localStorage.setItem("test5", snapshot.val().d)
    //                 localStorage.setItem("test6", snapshot.val().correctAns)
    // //--------------------------------------------------------------------------------------------------------------------------------
    //                 localStorage.setItem("test7", snapshot.val().question2)
    //                 localStorage.setItem("test8", snapshot.val().e)
    //                 localStorage.setItem("test9", snapshot.val().f)
    //                 localStorage.setItem("test10", snapshot.val().g)
    //                 localStorage.setItem("test11", snapshot.val().h)
    //                 localStorage.setItem("test12", snapshot.val().correctAns1)
    
    // //--------------------------------------------------------------------------------------------------------------------------------
    //                 localStorage.setItem("test13", snapshot.val().question3)
    //                 localStorage.setItem("test14", snapshot.val().i)
    //                 localStorage.setItem("test15", snapshot.val().j)
    //                 localStorage.setItem("test16", snapshot.val().k)
    //                 localStorage.setItem("test17", snapshot.val().l)
    //                 localStorage.setItem("test18", snapshot.val().correctAns2)

    // //--------------------------------------------------------------------------------------------------------------------------------
    //                 localStorage.setItem("test19", snapshot.val().question4)
    //                 localStorage.setItem("test20", snapshot.val().m)
    //                 localStorage.setItem("test21", snapshot.val().n)
    //                 localStorage.setItem("test22", snapshot.val().o)
    //                 localStorage.setItem("test23", snapshot.val().p)
    //                 localStorage.setItem("test24", snapshot.val().correctAns3)




    //             } else {
    //               console.log("No data available");
    //             }
    //           })
              //  .catch((error) => {
              //   console.error(error);
              // });
              alert("Questions Updated");
        }
        else {
            console.log("Something went wrong");
        }
      })
    //quizData();  
})


