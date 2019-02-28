(function () {
    // body of the function
    'use strict';
    // alert("Test");
    var obj = { name: "Anurag" };

    var greeting = function (a, b, c) {
        return "Welcome" + this.name + " to " + a + " " + b + " " + c;
    };

    console.log(greeting.call(obj, "test1", "test2", "test3"));

    console.log(greeting.apply(obj, ["test1", "test2", "test3"]));

    let x=greeting.bind(obj);
    console.log(x("test1","test2","test3"));
}());



