// Assignment Code
var generateBtn = document.querySelector("#generate");

var PasswordLength;
var ContainsLowercase= "abcdefghijklmnopqrstuvwxyz";
var ContainsUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var ContainsNumbers = "0123456789";
var containsSymbols = "!$^&*-=+_?";

var chosenCharacters = []

// Write password to the #password input
function enterpassword() {
  var password = genratepassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
debugger;
//write password function 
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Array of options for computer to pick from

var PasswordGenerator = function() {
  var result = "";
  // Ask user for password length
  PasswordLength = parseInt(prompt("How many characters would you like your password to be? Please choose between 8 and 128"));

while (isNaN(PasswordLength) || PasswordLength < 8 || PasswordLength > 128) {
  PasswordLength = prompt("Please enter a value between 8 - 128");
}
  ContainsUppercase = confirm("Does your password require uppercase letters?");
  ContainsLowercase = confirm("Does your password require lowercase letters?");
  ContainsNumbers = confirm("Does your password require numbers?");
  containsSymbols = confirm("Does your password require symbols?");


if (ContainsUppercase == false || ContainsLowercase == false ||
         ContainsNumbers == false || containsSymbols == false) {
  alert("At least one character type must be selected")
  return PasswordGenerator()
}

if(ContainsUppercase){
  chosenCharacters += ContainsUppercase
}
if(ContainsLowercase){
  chosenCharacters += ContainsLowercase
}

if(ContainsNumbers) {
  chosenCharacters += ContainsNumbers
}

if(containsSymbols) {
  chosenCharacters += containsSymbols
}

for (var i = 0; i < PasswordLength; i++) {
  result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.PasswordLength));
}
return result;

}

PasswordGenerator();

  // Assignment Code
 
  // Write password to the #password input
  function writePassword() {
    var password = PasswordGenerator();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
   

