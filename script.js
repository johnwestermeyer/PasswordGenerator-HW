// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9']
var special = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];

// Write password to the #password input
function writePassword() {
  var passLength;
  var charSet = [];
  do{
    passLength = prompt("How long would you like the password? (8-128 characters)");
  } while (passLength < 8 || passLength > 128);
  do{
    if(confirm("Do you want to include uppercase letters?")){
      charSet = charSet.concat(upperCase)
    };
    if(confirm("Do you want to include lowercase letters?")){
      charSet = charSet.concat(lowerCase);
    };
    if(confirm("Do you want to include numbers?")){
      charSet = charSet.concat(numbers);
    };
    if(confirm("Do you want to include special characters?")){
      charSet = charSet.concat(special);
  };
  } while (charSet.length < 1);
  
  function generatePassword(){
    var pass = "";
    for(i=0; i < passLength; i++){
      var ranChar = charSet[Math.floor(Math.random() * charSet.length)];
      pass += ranChar;
    }
    return pass;
  };
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
