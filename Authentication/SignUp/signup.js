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

//     if(passwordvalue != confirmpasswordvalue){
//         document.getElementById("confirmpassworderror").textContent="password and confirmpassword should be same"
//         isvalid=false
//     }
//     else{
//         document.getElementById("confirmpassworderror").textContent=""
//     }

//     if(isvalid){
//         name.value=""
//         email.value=""
//         password.value=""
//         confirmpassword.value=""

//         Swal.fire({
//             title: "Signup Successful!",
//             icon: "success",
//             // text: "You will be redirected to login.",
//             draggable: true,
//             timer: 3000,
//           }).then(()=>{
//                 let allusers =  JSON.parse(localStorage.getItem("users")) || [];
//                 allusers.push({name:namevalue,Email:emailvalue,password:passwordvalue,confirmpassword:confirmpasswordvalue})
//                 localStorage.setItem("users",JSON.stringify(allusers))
//                 location.href="../LogIn/login.html" 
//           })

        
        
//     }


// })