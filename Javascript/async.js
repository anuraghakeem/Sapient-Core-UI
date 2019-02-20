'use strict'
var counter=10;

function counter1(callback){
    if(counter>0){
        console.log(counter);
        counter--;
        callback(callback);
    }
}

function init(cb){
    cb(cb);
}
init(counter1);

function iLoveThis(){
    console.log("Awesome Programming");
}
setTimeout(iLoveThis,4500);

// iHateThis is executed first becasue of the setTimeout. Hence, order pf execution can be different. We use CALLBACK to make
// the functions are executed in specified order. All timeouts started at the same time.
function iHateThis(){
    console.log("Shitty Programming");
}
setTimeout(iHateThis,4000);

function iNeutralThis(){
    console.log("OK Programming");
}
setTimeout(iNeutralThis,5000);