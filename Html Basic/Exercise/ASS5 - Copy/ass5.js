(function () {
'use strict';

var fnameDsiable = document.getElementById('fname');
fnameDsiable.addEventListener('keypress', function (x) {
console.log(x);
console.log(this);
// x.preventDefault();
// console.log(x.key);

validateInput(x, /^[a-zA-Z\s\.]+$/);
})
function validateInput(x, regex) {
if (regex.test(x.key)) {
//condt ok
}
else {
x.preventDefault();
}
}

var snameDisable = document.getElementById('lname');
snameDisable.addEventListener('keypress', function (v) {
console.log(v);
console.log(this);
// x.preventDefault();
// console.log(x.key);

validateInput(v, /^[a-zA-Z\s\.]+$/);
})
function validateInput(v, regex) {
if (regex.test(v.key)) {
//condt ok
}
else {
v.preventDefault();
}
}
})(); 
 
