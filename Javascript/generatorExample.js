(function () {
    'use strict';
    // body of the function
    function* generatorFunction() {
        console.log("This will be executed first");
        yield "Hello, ";
        console.log("I will be printed after the pause");
        yield "World!";
        console.log("Lol");
        yield "What's up";
    }

    const generatorObject = generatorFunction();
    console.log("Test1");
    console.log(generatorObject.next().value);
    console.log("Test2");
    console.log(generatorObject.next().value);
    console.log("Test3");
    console.log(generatorObject.next().value);
    console.log("Test4");
}());



