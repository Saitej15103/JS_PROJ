// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";


// const firebaseConfig = {
//     apiKey: "AIzaSyDpQiXIVThebYvb8oet0cmdnP94pgEXOWw",
//     authDomain: "js-project-4f1d6.firebaseapp.com",
//     projectId: "js-project-4f1d6",
//     storageBucket: "js-project-4f1d6.firebasestorage.app",
//     messagingSenderId: "448192345524",
//     appId: "1:448192345524:web:2d54e119a089f2f3702ee1",
//     measurementId: "G-2R9VFES7DV"
// };



import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyCHi7YWw2ElIw73-SjsS9kzM2ghxiGa_xk",
    authDomain: "newjsproject-65bdb.firebaseapp.com",
    projectId: "newjsproject-65bdb",
    storageBucket: "newjsproject-65bdb.firebasestorage.app",
    messagingSenderId: "1066069266880",
    appId: "1:1066069266880:web:7d53f68492c5414d137825",
    measurementId: "G-5JR92PL3CX"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const author = getAuth(app)
const db = getDatabase(app)

let navbarsignup = document.getElementById("navbarsignup")
navbarsignup.addEventListener("click", (e) => {
    e.preventDefault()
    let signupModal = new bootstrap.Modal(document.getElementById("signupModal"));
    signupModal.show()


    let signupmodalform = document.getElementById("signupmodalform")
    signupmodalform.addEventListener("submit", async (e) => {
        e.preventDefault()
        let signupUsername = document.getElementById("signupUsername").value.trim()
        let signupEmail = document.getElementById("signupEmail").value.trim()
        let signupPassword = document.getElementById("signupPassword").value.trim()

        if (signupEmail === "" || signupUsername === "" || signupPassword === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill in all fields...",
            }).then(() => {
                signupModal.show()
            })
            return;
        }
        //--------------------------Signup Try and Catch---------------------------//

        try {
            const UserCredentials = await createUserWithEmailAndPassword(author, signupEmail, signupPassword)
            const user = UserCredentials.user;
            await set(ref(db, `users/${user.uid}`), {
                UserName: signupUsername,
                UserEmail: signupEmail,
            }).then(() => {
                Swal.fire({
                    title: "Successfully Registered...",
                    icon: "success",
                    draggable: true,
                }).then(() => { //-------Navigating To Login Modal---------//
                    signupModal.hide()
                    document.getElementById("signupUsername").value = ""
                    document.getElementById("signupEmail").value = ""
                    document.getElementById("signupPassword").value = ""
                    let loginModal = new bootstrap.Modal(document.getElementById("loginModal"))
                    loginModal.show()

                    let loginmodalform = document.getElementById("loginmodalform")
                    loginmodalform.addEventListener("submit", async (e) => {
                        e.preventDefault()
                        let loginEmail = document.getElementById("loginEmail").value.trim()
                        let loginPassword = document.getElementById("loginPassword").value.trim()

                        if (loginEmail === "" || loginPassword === "") {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Please fill in all fields...",
                            }).then(() => {
                                let loginModal = new bootstrap.Modal(document.getElementById("loginModal"))
                                loginModal.show()
                            })
                            return;
                        }

                        //---------------------Login Try and Catch----------------------//

                        try {
                            await signInWithEmailAndPassword(author, loginEmail, loginPassword).then(() => {
                                Swal.fire({
                                    title: "Login Successfull...",
                                    icon: "success",
                                    draggable: true,
                                }).then(() => {
                                    document.getElementById("loginEmail").value = ""
                                    document.getElementById("loginPassword").value = ""
                                    location.href = "./Dashboard/dashboard.html"
                                })
                            })
                        }
                        catch (err) {  //------Login Catch-------// 
                            Swal.fire({
                                icon: "error",
                                title: "Invalid Details...",
                            });
                        }
                    })
                })
            })


        }
        catch (err) {   //-----------Signup Catch------------//
            Swal.fire({
                icon: "error",
                title: "Allready Registered...",
            });
        }


    });
});


let navbarlogin = document.getElementById("navbarlogin")
navbarlogin.addEventListener("click", (e) => {
    e.preventDefault()

    let loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
    loginModal.show()

    let loginmodalform = document.getElementById("loginmodalform")
    loginmodalform.addEventListener("submit", async (e) => {
        e.preventDefault()
        let loginEmail = document.getElementById("loginEmail").value.trim()
        let loginPassword = document.getElementById("loginPassword").value.trim()

        if (loginEmail === "" || loginPassword === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill in all fields...",
            }).then(() => {
                let loginModal = new bootstrap.Modal(document.getElementById("loginModal"))
                loginModal.show()
            })
            return;
        }

        //---------------------Login Try and Catch----------------------//

        try {
            await signInWithEmailAndPassword(author, loginEmail, loginPassword).then(() => {
                Swal.fire({
                    title: "Login Successfull...",
                    icon: "success",
                    draggable: true,
                }).then(() => {
                    document.getElementById("loginEmail").value = ""
                    document.getElementById("loginPassword").value = ""
                    location.href = "./Dashboard/dashboard.html"
                })
            })
        }
        catch (err) {  //------Login Catch-------// 
            Swal.fire({
                icon: "error",
                title: "Invalid Details...",
            });
        }
    })
});

























//----------------------------------------------------------------------------
// const menuToggle = document.querySelector(".menu-toggle");
// const navLinks = document.querySelector(".nav-links");

// menuToggle.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
// });



// let signupform = document.getElementById("signup")

// signupform.addEventListener("submit", (e) => {
//     e.preventDefault()
//     let name = document.getElementById("username")
//     let email = document.getElementById("email")
//     let password = document.getElementById("password")
//     let confirmpassword = document.getElementById("confirm-password")

//     let namevalue = name.value.trim()
//     let emailvalue = email.value.trim()
//     let passwordvalue = password.value.trim()
//     let confirmpasswordvalue = confirmpassword.value.trim()
//     console.log(namevalue)

//     let isvalid = true

//     if (namevalue === "") {
//         document.getElementById("nameerror").textContent = "name required"
//         isvalid = false
//     }
//     else if (namevalue.length <= 3) {
//         document.getElementById("nameerror").textContent = "pls enter more than 3 char"
//         isvalid = false
//     }
//     else {
//         document.getElementById("nameerror").textContent = ""
//     }



//     let emailpattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

//     if (emailvalue === "") {
//         document.getElementById("emailerror").textContent = "email required"
//         isvalid = false
//     }
//     else if (!emailpattern.test(emailvalue)) {
//         document.getElementById("emailerror").textContent = "Invalid Email"
//         isvalid = false
//     }
//     else {
//         document.getElementById("emailerror").textContent = ""
//     }


//     let passwordpattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*_+]).{8,}$/
//     if (passwordvalue === "") {
//         document.getElementById("passworderror").textContent = "password required"
//         isvalid = false
//     }
//     else if (!passwordpattern.test(passwordvalue)) {
//         document.getElementById("passworderror").textContent = "Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)."
//         isvalid = false
//     }
//     else {
//         document.getElementById("passworderror").textContent = ""
//     }

//     if (passwordvalue != confirmpasswordvalue) {
//         document.getElementById("confirmpassworderror").textContent = "password and confirmpassword should be same"
//         isvalid = false
//     }
//     else {
//         document.getElementById("confirmpassworderror").textContent = ""
//     }

//     if (isvalid) {
//         name.value = ""
//         email.value = ""
//         password.value = ""
//         confirmpassword.value = ""

//         Swal.fire({
//             title: "Signup Successful!",
//             icon: "success",
//             // text: "You will be redirected to login.",
//             draggable: true,
//             timer: 3000,
//         }).then(() => {
//             let allusers = JSON.parse(localStorage.getItem("users")) || [];
//             allusers.push({ name: namevalue, Email: emailvalue, password: passwordvalue, confirmpassword: confirmpasswordvalue })
//             localStorage.setItem("users", JSON.stringify(allusers))
//             location.href = "../LogIn/login.html"
//         })



//     }


// })