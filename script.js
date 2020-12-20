// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  };

// Get references to the #generate element
    var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);

// Variables
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numericCharacters = "0123456789";
var lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";

// Function to prompt user for password options.
function generatePassword() {
    var password = "";
    var passwordCharset = "";

// Conditional statement to check if password length is a number.
// Conditional statement to check if password length is at least 8 characters long and less than 128 characters.
    var passwordLength = window.prompt("How many characters would you like your password to be?");

    if (Number(passwordLength < 8) | Number(passwordLength > 128) | isNaN(passwordLength))  {
        window.alert("Your password is not a valid length. Please enter a number between 8 and 128.");
        return;
        }
    
//Prompts for character types to include in the password, you have an option of special characters, numeric, lowercase and/or uppercase characters
    var characterSetChoice1 = window.confirm("Would you like to include special characters?");
    if (characterSetChoice1) {passwordCharset += specialCharacters; }

    var characterSetChoice2 = window.confirm("Would you like to include numerical characters?");
    if (characterSetChoice2) {passwordCharset += numericCharacters; }

    var characterSetChoice3 = window.confirm("Would you like to include lowercase letters?");
    if (characterSetChoice3) {passwordCharset += lowerCasedCharacters; }

    var characterSetChoice4 = window.confirm("Would you like to include uppercase letters?");
    if (characterSetChoice4) {passwordCharset += upperCasedCharacters; }


 // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false.
    if (passwordCharset === "") {
        window.alert("You must choose at least one option of character types to include!"); 
    }

// Function for getting a random element.
    if(passwordLength >=8 && passwordLength <=128) {
        for(var i = 0; i < passwordLength; i++) {
        password += passwordCharset.charAt(Math.floor(Math.random() * passwordCharset.length));
    };
    return password;
    };
};
