// let loginform = document.getElementById("loginform")

// loginform.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     let emaillogin = document.getElementById("email").value.trim()
//     let passwordlogin = document.getElementById("password").value.trim()

//     let userstorage = JSON.parse(localStorage.getItem("users"))
//     console.log(userstorage)

//     let user = userstorage.find(x=>{
//         return x.email === emaillogin && x.password === passwordlogin
//     })

//     if(user){
//         alert("successfully loggedin")
//     }else{
//         alert("user not found")
//     }
// })



let loginform = document.getElementById("loginform");

loginform.addEventListener("submit", (e) => {
    e.preventDefault();

    let emaillogin = document.getElementById("email").value.trim().toLowerCase();
    let passwordlogin = document.getElementById("password").value.trim();

    console.log("Entered Email:", emaillogin);
    console.log("Entered Password:", passwordlogin);

    let userstorage = JSON.parse(localStorage.getItem("users")) || [];

    console.log("Stored Users:", userstorage);

    if (userstorage.length === 0) {
        alert("No users found! Please sign up first.");
        return;
    }

    let user = userstorage.find(x => {
        console.log("Checking User:", x.email, x.password);
        return x.email.trim().toLowerCase() === emaillogin && x.password.trim() === passwordlogin;
    });

    console.log("Found User:", user);

    if (user) {
        alert("Successfully logged in");
    } else {
        alert(" User not found");
    }
});
