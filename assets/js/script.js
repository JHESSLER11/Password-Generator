// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowCharSet = "abcdefghijklmnop"
var upCharSet = "ABCDEFGHIJKALMNOP"
var numSet = "0123456789"
var specialSet = "!@#$%^&*?/,.()"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

function generatePassword () {
  var character = prompt("How many characters do you want?")
  
  var length = character;
  
  if (character < 8 &&  character < 128) {
    character = prompt("Your password must be between 8 and 128 characters")
  }

  else
    var confirmLower = confirm("Do you want lowercase letters?");

    var confirmUpper = confirm("Do you want uppercase letters?");

    var confirmNum = confirm("Do you want the password to contain numbers?");

    var confirmSpecial  = confirm("Do you want the password to contain special characters?")

    if (confirmLower) {
      password = password + lowCharSet;
    }

    if (confirmUpper) {
      password = password + upCharSet;
    }

    if (confirmNum) {
      password = password + confirmNum
    }

    if (confirmSpecial)  {
      password = password +confirmSpecial
    }

  for (let index = 0; index < length; index++) {
    var randomIndex = math.floor(Math.random() * password.length)
    actualPassword += password.charAt(randomIndex);
    
  }
  


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

