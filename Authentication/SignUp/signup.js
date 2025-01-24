let signupform = document.getElementById("signup")

signupform.addEventListener("submit",(e)=>{
    e.preventDefault()
    let name = document.getElementById("username")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let confirmpassword = document.getElementById("confirm-password")

    let namevalue = name.value.trim()
    let emailvalue = email.value.trim()
    let passwordvalue = password.value.trim()
    let confirmpasswordvalue = confirmpassword.value.trim()
    console.log(namevalue)

    if (namevalue === ""){
        document.getElementById("nameerror").textContent="name required"
    }
    else if(namevalue.length<=3){
        document.getElementById("nameerror").textContent="pls enter more than 3 char"
    }
    else{
        document.getElementById("nameerror").textContent=""
    }



    let emailpattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

    if (emailvalue === ""){
        document.getElementById("emailerror").textContent="email required"
    }
    else if(!emailpattern.test(emailvalue)){
        document.getElementById("emailerror").textContent="Invalid Email"
    }
    else{
        document.getElementById("emailerror").textContent=""
    }


    let passwordpattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*_+]).{8,16}$/
    if (passwordvalue === ""){
        document.getElementById("passworderror").textContent="password required"
    }
    else if(!passwordpattern.test(passwordvalue)){
        document.getElementById("passworderror").textContent="Invalid password"
    }
    else{
        document.getElementById("passworderror").textContent=""
    }
})