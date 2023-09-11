const btn = document.querySelector("#mybtn");
const copyPass = document.getElementById("copyPass");

const passwordBox = document.getElementById("password");
const length = 12; 
//    DECIDES THE LENGTH OF THE PASSWORD //

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   /// TAKE A RANDOM UPPERCASE CHARACTER ///
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()_+|{}[]<>/-=";
const allChars = upperCase+lowerCase+number+symbol;
//  /// GENERATE A SIMPLE ALL CHAR PASSWORD HAVING CHARS OF ALL 4 TYPES ///

btn.addEventListener("click", createPassword);
copyPass.addEventListener("click", copyPassword);

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while(length > password.length)
    //  /// 
    {
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword (){
    const copyText = passwordBox.value;
    navigator.clipboard.writeText(copyText);
}