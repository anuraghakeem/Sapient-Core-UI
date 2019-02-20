'use strict';

// This will be overriden if function init(){} is below any var init= function(){}
function init() {
    // var firstName,lastName;
    console.log(getFullName("One", "Two"));
    console.log(getFullName("One"));
    console.log(getFullNameAgain("Three", "Four"));
    alert(getFullName("One", "Two"));
}

init();

var init = function () {
    // var firstName,lastName;
    console.log(getFullName("lol", "lel"));
    console.log(getFullName("Raj"));
    console.log(getFullNameAgain("Tom", "Cruise"));
    alert(getFullName("Chocolate", "Cake"));
    // alert(getFullName("Kiran","PVS"));
}

init();

var init = function () {
    // var firstName,lastName;
    console.log(getFullName("Kiran", "PVS"));
    console.log(getFullName("Kiran"));
    console.log(getFullNameAgain("Anurag", "Hakeem"));
    alert(getFullName("Kiran", "PVS"));
}

function getFullName(fname, lname) {
    return fname + " " + lname;
}

// If you use two functions with same name, it'll execute the second one i.e. lower one
// function getFullName(fname){
//     return fname;
// }

function getFullNameAgain(fname, lname) {
    return fname + " " + lname;
}

init();

// This is overriden as mentioned above
function init() {
    // var firstName,lastName;
    console.log(getFullName("One", "Two"));
    console.log(getFullName("One"));
    console.log(getFullNameAgain("Three", "Four"));
    alert(getFullName("One", "Two"));
}

init();