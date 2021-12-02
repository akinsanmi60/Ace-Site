const loginForm = document.getElementById("login-form");
const signForm = document.getElementById("signup-form");



// open login form
const loginSwitch = document.getElementById("switch-A");


loginSwitch.addEventListener("click", (e) => {

    loginForm.style.display = "block"
    signForm.style.display = "none"
})


//open signup form
const signSwitch = document.getElementById("switch-B");

signSwitch.addEventListener("click", (e) => {

    signForm.style.display = "block"
    loginForm.style.display = "none"
    

})












// overall check

function ValidateEmail(email){
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
        console.log(mailformat.test(email))
    if(mailformat.test(email))  {  
        return true;
    }else{ 
            alert("Invalid email");  
            return false;
    }
}

function CheckPassword(password){
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        console.log(passwordRegex.test(password))
        if (passwordRegex.test(password)) {
            return true;
        } else {
            alert("The password must be greater than 6 characters {should contain small and capital letters with numbers}")
            return false;
        }
    }



//login validation
const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-mail").value;
    const password = document.getElementById("Email-Password").value;
    
    

    CheckPassword(password)

    ValidateEmail(email)
})






//Signup validtion

const signButton = document.getElementById("Sign-button");

signButton.addEventListener( "click", (e) => { 
    e.preventDefault();
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const signMail = document.getElementById("Sign-mail").value;
    const signPassword = document.getElementById("firstpassword").value;
    const confirmPassword = document.getElementById("secondpassword").value;

    function validationFirstName(){
        let nameRegex = /^[a-zA-Z\-]+$/;
        console.log(nameRegex.test(firstName))
        if (nameRegex.test(firstName)) {
            return true;
        }else{
            return false;
        }
    }

    function validationLastName(){
        let nameRegex = /^[a-zA-Z\-]+$/;
        console.log(nameRegex.test(lastName))
        if (nameRegex.test(lastName)) {
            return true;
        }else{
            return false;
        }
    }
  
        if(signPassword !== confirmPassword) {   
            alert("Passwords did not match");  
         }
    
  
   
    
        

    validationFirstName()

    validationLastName()

    ValidateEmail(signMail)

    CheckPassword(signPassword)
})