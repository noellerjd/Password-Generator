// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

var password=document.getElementById("password");
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Set length of password
  var setLength = Number(window.prompt("How many characters should the password be?"));
    if(!setLength) {
      alert("Error occured: Please try again!")
      return;
    }
    if(setLength > 128) {
      alert("Only passwords with less than 128 characters please!")
      return;
    }
    if (setLength < 8){
      alert("Password must be at least 8 characters!")
      return;
    }

    // var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var chars = "abcdefghijklmnopqrstuvwxyz";
//select uppercase or lowercase
  var charselectUL = window.confirm("Do you want the password to contain uppercase letters?")
  if(charselectUL) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
//select numbers true or false
  var charselectNum = window.confirm("Do you want the password to contain numbers?")
  if(charselectNum) {
    chars += "1234567890";
  }
//select special characters true or false
  var charselectS = window.confirm("Do you want the password to contain special characters?")
  if(charselectS) {
    chars += "!@#$%^&*()";
  }

  var passwordLength = setLength;
  var password = "";
  
  for (let i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random()* chars.length);
    password += chars.substring(randomNumber, randomNumber +1);    
  } 
  document.getElementById("password").value = password; 
}

generateBtn.addEventListener("click", generatePassword);

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
