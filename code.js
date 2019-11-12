var symVal=prompt("How many characters do you desire?");
var sconf = confirm("Click OK if you want to use special characters?");
var nconf = confirm("Click OK if you want to use numbers?");
var lconf = confirm("Click OK if you want to use lowercase letters?");
var cconf = confirm("Click OK if you want to use capital letters?");

       
var lowVal = [   "a","b","c","d","e","f","g","h","i"];
var capVal = ["A","B","C","D","E","F","G","H","I"];
var symVal = ["~,","!","@","#","$","%","^","&","*","(",")"];
var numVal=["1","2","3","4","5","6","7","8","9","0"];
      
var symRandom = symVal[Math.floor(Math.random() * symVal.length)];
console.log(symRandom);
var numRandom = numVal[Math.floor(Math.random() * numVal.length)];
console.log(numRandom);
var lowRandom = lowVal[Math.floor(Math.random() * lowVal.length)];
console.log(lowRandom);
var capRandom = capVal[Math.floor(Math.random() * capVal.length)];
console.log(capRandom);
      
function passwordSym(){
       if (sconf === true){
           console.log(symRandom);
           passwordSym = passwordSym + symRandom.charAt(Math.floor(Math.random()* symRandom.length));
           document.getElementById("password").innerHTML = passwordSym;
           console.log(passwordSym);
       } else if (nconf === true) {
           console.log(numRandom);
           passwordNum = passwordNum + numRandom.charAt(Math.floor(Math.random()* numRandom.length));
           document.getElementById("password").innerHTML = passwordNum;
           console.log(passwordNum);
       } else if (lconf === true) {
           console.log(lowRandom);
           passwordLow = passwordLow + lowRandom.charAt(Math.floor(Math.random()* lowRandom.length));
           document.getElementById("password").innerHTML = passwordLow;
       }else {
           console.log(capRandom);
           passwordCap = passwordCap + capRandom.charAt(Math.floor(Math.random()* capRandom.length));
           document.getElementById("password").innerHTML = passwordCap
   }
var passwordSym=;
var passwordNum=;
var passwordLow=;
var passwordCap=;

  };
















































 
 




