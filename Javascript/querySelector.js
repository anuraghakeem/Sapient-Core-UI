var x = document.querySelector('.select');
var inner = x.querySelectorAll(':scope .outer .inner');
console.log(inner.length); // 0