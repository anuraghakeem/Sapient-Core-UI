(function(){
    'use strict';
    var colt = {
		firstName: "Colt",
		sayHi: function () {
            // return "Hi " + this.firstName;
            setTimeout(function(){
                console.log("Hi "+this.firstName)
            }.bind(this),1000)
		},
		addNumbers: function (a, b, c, d) {
			return this.firstName + " just calculated " + (a + b + c + d);
		}
    }
    var elie = {
		firstName: "Elie"
    }
    var elieHi=colt.sayHi.bind(elie);
    console.log(colt.sayHi());
    console.log("Hello");
    console.log(elieHi());
}());