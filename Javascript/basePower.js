(function () {
    'use strict';
    // body of the function
    function* powerSeries(number, power) {
        let base = number;
        while (true) {
            yield Math.pow(base, power);
            base++;
        }
    }

    let powerObject = powerSeries(2, 4);
    console.log("Test1");
    console.log(powerObject.next().value);
    console.log(powerObject.next().value);
    console.log("Test2");
}());



