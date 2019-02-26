// document.getElementById("myBtn").addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
//   });

(function () {
    'use strict';
    var btn = document.getElementById("myBtn").addEventListener('click', function (e) {
        console.log(e);
        console.log(this);
    });
})();

(function () {
    'use strict';
    var txt = document.getElementById("myText").addEventListener('keypress', function (t) {
        console.log(t);
        console.log(this);
        console.log(t.key);
        validateInput(t, /^[A-Za-z]+$/);
        // t.preventDefault();
        // t.preventDefault() prevents text from being displayed in the textbox in frontend
        // var myregex = /^[A-Za-z]$/;

    })
        function validateInput(t, regex) {
            if (regex.test(t.key)) {
                // condition ok

            } else {
                t.preventDefault();
            }
        }
    })();