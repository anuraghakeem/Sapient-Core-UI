(function () {
    'use strict';
    var arr = [1, 2, 3, 4, 5];
    Array.prototype.even=function(){
        console.log(this);
    };
    // arr.even();
    var obj= new Object();
    Object.prototype.cake=function(){
        console.log("Hello frnzzz");
    }
    obj.cake();
}());

(function () {
    'use strict';
    
    var obj2= new Object();
    obj2.cake();
}());