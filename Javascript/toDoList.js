(function () {
    'use strict';
    // body of the function
    var lis = document.querySelectorAll(".list");
     for(var j=0;j<lis.length;j++){console.log(lis[j]);}
    for (var j = 0; j < lis.length; j++) {
        lis[j].addEventListener("mouseover", function () {
            this.classList.add("greenText");
        });
        lis[j].addEventListener("mouseout", function () {
            this.classList.remove("greenText");
        });
        lis[j].addEventListener("click", function () {
            this.classList.toggle("strikeText");
        });
    }
}());
