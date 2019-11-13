function generate() {
  var charNums = prompt("How many characters do you desire?");
  var symConfirm = confirm("Click OK if you want to use special characters?");
  var numConfirm = confirm("Click OK if you want to use numbers?");
  var lowConfirm = confirm("Click OK if you want to use lowercase letters?");
  var capConfirm = confirm("Click OK if you want to use capital letters?");
  var symVal = [
    "~,",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "{",
    "}",
    ";",
    ":",
    "<",
    ">",
    "?"
  ];
  var numVal = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var lowVal = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y,",
    "z"
  ];
  var capVal = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];

  var password = [];
  var display = document.getElementById("display");

  console.log(charNums);
  for (var i = 0; i < charNums; i++) {
    if (symConfirm) {
      password.push(symVal[Math.floor(Math.random() * symVal.length)]);
      i = i + 1;
    }
    if (i === charNums) {
      break;
    }
    console.log(i);
    if (capConfirm) {
      password.push(capVal[Math.floor(Math.random() * capVal.length)]);
      i = i + 1;
    }
    if (i === charNums) {
      break;
    }

    if (numConfirm) {
      password.push(numVal[Math.floor(Math.random() * numVal.length)]);
      i = i + 1;
    }
    if (i === charNums) {
      break;
    }

    if (lowConfirm) {
      password.push(lowVal[Math.floor(Math.random() * lowVal.length)]);
      i = i + 1;
    }
    if (i === charNums) {
      break;
    }
  }

  password = password.join("");
  display.value = password;
}

function copyPassword() {
  document.getElementById("display").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}
