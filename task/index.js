document.querySelector("form").addEventListener("submit", loginFun);
var regdUsers = JSON.parse(localStorage.getItem("userCreds"));
console.log(regdUsers);

function loginFun() {
  event.preventDefault();
  var enteredEmail = document.querySelector("#email").value;
  var enteredPass = document.querySelector("#password").value;

  var otp = document.querySelector("#otp");

  console.log(email, password);

  for (var i = 0; i < regdUsers.length; i++) {
    console.log(regdUsers[i]);
    if (
      regdUsers[i].email == enteredEmail ||
      regdUsers[i].password == enteredPass
    ) {
      
      otp.disabled = false
      alert("send OTP to your email");
      
    } 
    
    else {
      otp.disabled = true;
      alert("login failed");
      
    }
  }
}