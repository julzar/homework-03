// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    
// My code
// Variables
const lettersLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const lettersUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const specialCharacters = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '^', '_', "'", '`', ',', '|', '~', '{', '}', '[', ']', ' '];

let passwordCharacters = [];

let finalPassword = '';

let useLowercase;

let useUppercase;

let useNumbers;

let useSpecialCharacters;

// Assign variables' values based on user inputs
let  passwordLength = prompt(`How many characters would you like your password to be? 
Enter a number from 8 to 128`)
console.log(passwordLength)

while ((passwordLength < 8 || passwordLength > 128 || parseInt(passwordLength).toString() === 'NaN' || passwordLength.includes(' ')) && (passwordLength !== null)) { //Thanks Nick!
    passwordLength = prompt(`Enter a number from 8 to 128`)
    console.log(passwordLength)
}


function getCharset() {

    useLowercase = confirm(`Do you want your password to include lowercase letters?`)
    console.log(useLowercase)
    
    useUppercase = confirm(`Do you want your password to include uppercase letters?`)
    console.log(useUppercase)
    
    useNumbers = confirm(`Do you want your password to include numbers?`)
    console.log(useNumbers)
    
    useSpecialCharacters = confirm(`Do you want your password to include special characters?`)
    console.log(useSpecialCharacters)

    if (useLowercase === false && useUppercase === false && useNumbers === false && useSpecialCharacters === false) {
        
        alert(`You must choose at least one set of characters to include in your password.`);
        
        getCharset()
    }

}

if (passwordLength !== null) { // Stops program if user clicks 'cancel' in response to 'passwordLength' prompt.

getCharset()


// Following series of 'if' statements fill the empty array 'passwordCharacters' with values based on the user's inputs.
if (useLowercase) {
    passwordCharacters = passwordCharacters.concat(lettersLowercase)
}

if (useUppercase) {
    passwordCharacters = passwordCharacters.concat(lettersUppercase)
}

if (useNumbers) {
    passwordCharacters = passwordCharacters.concat(numbers)
}

if (useSpecialCharacters) {
    passwordCharacters = passwordCharacters.concat(specialCharacters)
}
// console.log(passwordCharacters)

// This is where the password is actually generated
for (i = 0; i < passwordLength; i++) {
   let randomCharacter = passwordCharacters[Math.floor(Math.random() * (passwordCharacters.length - 1))]
   finalPassword += randomCharacter
}
console.log(`Your password is:
${finalPassword}`)

alert(`Your password has been generated.`)

}
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

