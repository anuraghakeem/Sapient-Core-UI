// Test Alert
// function changeColor(){
//     alert("Hello");
// } 

(function () {
    'use strict';

    // Without using toggle

    // var ispurple = false;
    // var btnChangeColor = document.querySelector("button");
    // function changeColor() {

    //     if (ispurple) {
    //         document.body.style.background = "white";
    //     } else {
    //         document.body.style.background = "purple";
    //     }
    //     ispurple = !ispurple;

    // }
    // btnChangeColor.addEventListener("click", changeColor);
    
    
    // --------------------------------------------------------


    // With toggle

    var btnChangeColor = document.querySelector("#btnColor");

    function changeColor() {
        document.body.classList.toggle("purpleBack");
    }

    btnChangeColor.addEventListener("click", changeColor);

})();