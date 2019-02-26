(function () {
'use strict';

var fnameDsiable = document.getElementById('fname');
fnameDsiable.addEventListener('keypress', function (x) {
console.log(x);
console.log(this);


validateInput(x, /^[a-zA-Z\s\.]+$/);
})
function validateInput(x, regex) {
if (regex.test(x.key)) {

}
else {
x.preventDefault();
}
}

var snameDisable = document.getElementById('lname');
snameDisable.addEventListener('keypress', function (v) {
console.log(v);
console.log(this);


validateInput(v, /^[a-zA-Z\s\.]+$/);
})
function validateInput(v, regex) {
if (regex.test(v.key)) {

}
else {
v.preventDefault();
}
}


    'use strict';

    // first name more than 20
    // var first=document.getElementById('fname');
    // console.log(first)
    // if(document.getElementById('fname')===''){
    //     document.getElementById("fname").style.visibility = "visible";
    // }
    function customAlert(msg, duration) {
        var styler = document.createElement("div");
        styler.className = "container alert alert-danger"
        // styler.setAttribute("style", "border: solid 3px black; width:auto; height:auto; top:90%; left:40%; background-color:#ff0000; color:Silver");
        styler.innerHTML = msg
        setTimeout(function () {
            styler.remove(styler);
        }, duration);
        document.body.appendChild(styler);
    }

    function validate(){
        console.log('hh')
        if(document.getElementById('fname').value.length>20){
            console.log('hh')
            customAlert("First name length cannot be more than 20",5000)
        }
        if(document.getElementById('lname').value.length>20){
            customAlert("Last name length cannot be more than 20",5000)
        }
        if(document.getElementById('age').value<18 || document.getElementById('age').value>99){
            customAlert("Age should not be more than 99 or less than 18",5000)
        }
    }
    var submit = document.getElementById('submitform');
    submit.addEventListener('click',validate);

})();
 
