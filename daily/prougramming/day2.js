var Bnumber = document.querySelector("button #number");
var Bcolour = document.querySelector("button #color");
var operation = document.getElementById("ope");
var num = document.querySelector("input #number");
var col = document.querySelector("input #color");
Bnumber.onclick = function () {
  operation.style.height = num.value;
  operation.style.width = num.value;
};
Bcolour.onclick = function () {
  operation.style.backgroundColor = col.value;
};
