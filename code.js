
function generate () {

var inputVal=prompt("How many characters do you desire?");
var symVal= confirm("Click OK if you want to use special characters?");
var numVal= confirm("Click OK if you want to use numbers?");
var lowVal = confirm("Click OK if you want to use lowercase letters?");
var capVal = confirm("Click OK if you want to use capital letters?");
var symVal = ["~,","!","@","#","$","%","^","&","*","(",")","{","}",";",":","<",">","?"];
var numVal=["1","2","3","4","5","6","7","8","9","0"];
var lowVal = [   "a","b","c","d","e","f","g","h","i","j","k","l","m","n","p","q","r","s","t","u","v","w","x","y,","z"];
var capVal = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U,","V","W","X","Y","Z"];

var password = [];  
var display = document.getElementById('display');

  
for (var i = 0; i<inputVal; i++  ) {
  password[i] =  symVal[Math.floor(Math.random() * symVal.length)];
};
for (var i = 0; i<inputVal; i++  ) {
  password[i] =  numVal[Math.floor(Math.random() * numVal.length)];
};
for (var i = 0; i<inputVal; i++  ) {
    password[i] =  lowVal[Math.floor(Math.random() * lowVal.length)];
};
for (var i = 0; i<inputVal; i++  ) {
  password[i] =  capVal[Math.floor(Math.random() * capVal.length)];
};

password = password.join("");
display.value = password;

};



// var symRandom = symVal[Math.floor(Math.random() * symVal.length)];
// console.log("symRandom", symRandom);
// var numRandom = numVal[Math.floor(Math.random() * numVal.length)];
// console.log(numRandom);

// console.log(lowRandom);
// var capRandom = capVal[Math.floor(Math.random() * capVal.length)];
// console.log(capRandom);     










//function generatePassword(){
  // user says 9 
 
//}};

      
 //for (var i = 0; i < valInput; i++) {

   
//   if (sconf === true){
//         passwordSym = passwordSym + symRandom.charAt(Math.floor(Math.random()* symRandom.length));
//         document.getElementById("password").innerHTML = passwordSym;
//     } else if (nconf === true) {
//         passwordNum = passwordNum + numRandom.charAt(Math.floor(Math.random()* numRandom.length));
//         document.getElementById("password").innerHTML = passwordNum;
//     } else if (lconf === true) {
//         passwordLow = passwordLow + lowRandom.charAt(Math.floor(Math.random()* lowRandom.length));
//         document.getElementById("password").innerHTML = passwordLow;
//     }else {
//         passwordCap = passwordCap + capRandom.charAt(Math.floor(Math.random()* capRandom.length));
//         document.getElementById("password").innerHTML = passwordCap
// };

  function copyPassword() {
    document.getElementById("display").select();
      document.execCommand("Copy");
      alert("Password copied to clipboard!");
  }



//    function passwordNum(){
//     if (sconf === true){
//         console.log(symRandom);
//         passwordSyb = passwordSyb + symRandom.charAt(Math.floor(Math.random()* symRandom.length));
//         document.getElementById("password").innerHTML = passwordSyb;
//         console.log passwordSyb);
//     } else if (nconf === true) {
//         console.log(numRandom);
//         passwordNum = passwordNum + numRandom.charAt(Math.floor(Math.random()* numRandom.length));
//         document.getElementById("password").innerHTML = passwordNum;
//         console.log(passwordNum);
//     } else if (lconf === true) {
//         console.log(lowRandom);
//         passwordLow = passwordLow + lowRandom.charAt(Math.floor(Math.random()* lowRandom.length));
//         document.getElementById("password").innerHTML = passwordLow;
//     }else {
//         console.log(capRandom);
//         passwordCap = passwordCap + capRandom.charAt(Math.floor(Math.random()* capRandom.length));
//         document.getElementById("password").innerHTML = passwordCap
// }
//    };
// function passwordLow(){
//   if (sconf === true){
//       console.log(symRandom);
//       passwordSyb = passwordSyb + symRandom.charAt(Math.floor(Math.random()* symRandom.length));
//       document.getElementById("password").innerHTML = passwordSyb;
//       console.log passwordSyb);
//   } else if (nconf === true) {
//       console.log(numRandom);
//       passwordNum = passwordNum + numRandom.charAt(Math.floor(Math.random()* numRandom.length));
//       document.getElementById("password").innerHTML = passwordNum;
//       console.log(passwordNum);
//   } else if (lconf === true) {
//       console.log(lowRandom);
//       passwordLow = passwordLow + lowRandom.charAt(Math.floor(Math.random()* lowRandom.length));
//       document.getElementById("password").innerHTML = passwordLow;
//   }else {
//       console.log(capRandom);
//       passwordCap = passwordCap + capRandom.charAt(Math.floor(Math.random()* capRandom.length));
//       document.getElementById("password").innerHTML = passwordCap
// }
// };
// function passwordCap(){
//   if (sconf === true){
//       console.log(symRandom);
//       passwordSyb = passwordSyb + symRandom.charAt(Math.floor(Math.random()* symRandom.length));
//       document.getElementById("password").innerHTML = passwordSyb;
//       console.log passwordSyb);
//   } else if (nconf === true) {
//       console.log(numRandom);
//       passwordNum = passwordNum + numRandom.charAt(Math.floor(Math.random()* numRandom.length));
//       document.getElementById("password").innerHTML = passwordNum;
//       console.log(passwordNum);
//   } else if (lconf === true) {
//       console.log(lowRandom);
//       passwordLow = passwordLow + lowRandom.charAt(Math.floor(Math.random()* lowRandom.length));
//       document.getElementById("password").innerHTML = passwordLow;
//   }else {
//       console.log(capRandom);
//       passwordCap = passwordCap + capRandom.charAt(Math.floor(Math.random()* capRandom.length));
//       document.getElementById("password").innerHTML = passwordCap
// }
//   };

