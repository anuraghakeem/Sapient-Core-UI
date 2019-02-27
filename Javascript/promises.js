// Single Promise

// (function () {
//     'use strict';
//     alert("Check Console");

//     let promise = new Promise((resolve, reject) => {
//         console.log("I am second");
//         if (true) {
//             resolve('I am resolved Data');
//         }
//         else {
//             reject('I am the rejectData');
//         }
//     });

//     promise.then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     })

//     console.log("I am first");



// }());

// Promise All

(function () {
    'use strict';
    alert("Check Console");

    let promise1 = new Promise((resolve, reject) => {
        console.log("I am first promise");
        if (true) {
            // reject('I am the rejectData of promise 1');
            resolve('I am resolved Data of promise 1');
        }
        else {
            // resolve('I am resolved Data of promise 1');
            reject('I am the rejectData of promise 1');
        }
    });

    let promise2 = new Promise((resolve, reject) => {
        console.log("I am second promise");
        if (true) {
            resolve('I am resolved Data of promise 2');
            // reject('I am the rejectData of promise 2');
        }
        else {
            // resolve('I am resolved Data of promise 2');
            reject('I am the rejectData of promise 2');
        }
    });


    Promise.all([promise1, promise2]).then(function (data) {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })

}());