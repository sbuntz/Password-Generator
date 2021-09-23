// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assigned variables
var ContainsUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var ContainsLowerCase = "abcdefghijklmnopqrstuvwxyz";
var ContainsNumbers = "0123456789";
var containsSymbols = "!@,#$%&*{}[]/\\+=";
var chosenCharacters = "";

//write password function 
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

//generate password function gets called in writePassword function, and it should return the final password
function generatePassword(){
  var passwordResult = "";
  var PasswordLength = prompt("How many characters in your random password? (between 8 and 128)");
  if(isNaN(PasswordLength)){
    alert("Please choose numbers between 8 - 128");
    return generatePassword()
  }
  if(PasswordLength<8 || PasswordLength> 128){
    alert("Please choose numbers between 8 - 128");
    return generatePassword()
  }
  var ConfirmUpperCase = confirm("Does your password require uppercase letters?");
  var ConfirmLowerCase = confirm("Does your password require lowercase letters?");
  var ConfirmNumbers = confirm("Does your password require numbers?");
  var ConfirmSymbols = confirm("Does your password require symbols?");


  if (!ConfirmUpperCase && !ConfirmLowerCase && !ConfirmNumbers && !ConfirmSymbols) {
    alert("At least one character type must be selected")
    return PasswordGenerator()
  }

  if(ConfirmUpperCase){
    chosenCharacters += ContainsUpperCase
  }
  if(ConfirmLowerCase){
    chosenCharacters += ContainsLowerCase
  }

  if(ConfirmNumbers) {
    chosenCharacters += ContainsNumbers
  }

  if(ConfirmSymbols) {
    chosenCharacters += containsSymbols
  }

for (var i = 0; i < PasswordLength; i++) {
  passwordResult += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
}
return passwordResult;

}
