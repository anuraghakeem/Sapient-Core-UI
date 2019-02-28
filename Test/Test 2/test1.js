(function () {
    // body of the function
    'use strict';
    // alert("Check Console");
    var name = prompt("Enter string to be trimmed and check console(ctrl+shift+i)");
    var result = name.substring(1, name.length - 1);
    console.log("For "+name+" :");
    console.log(result);
}());