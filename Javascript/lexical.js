'use strict';

function outer(){
    var x=10;

// Closure used
    return function(){
        console.log(x);
    };
}

var exec = outer();