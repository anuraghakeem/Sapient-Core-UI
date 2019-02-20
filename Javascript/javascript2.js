(function () {
    'use strict';
    var student;
//Need to use this.property=value to access via objects, below var x=10 is incorrect.
// function Person() {
//     var x = 10;
//     this.firstName = "Kiran";}
// 
    function Person() {
        this.x = 10;
        this.firstName = "Kiran";
    }
    student = new Person();
    alert(student.firstName)
    alert(student.x)
})(); 
