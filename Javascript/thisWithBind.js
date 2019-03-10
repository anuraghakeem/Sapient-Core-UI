(function () {
	'use strict';
	var colt = {
		firstName: "Colt",
		sayHi: function () {
			return "Hi " + this.firstName;
		},
		addNumbers: function (a, b, c, d) {
			return this.firstName + " just calculated " + (a + b + c + d);
		}
	}

	var elie = {
		firstName: "Elie"
	}
	// call
	console.log("Using call");
	console.log(colt.sayHi());
	console.log(colt.sayHi.call(elie));
	console.log(colt.addNumbers(1, 2, 3, 4));
	console.log(colt.addNumbers.call(elie, 5, 6, 7, 8));
	// apply
	console.log("Using apply");
	console.log(colt.sayHi());
	console.log(colt.sayHi.apply(elie));
	console.log(colt.addNumbers(1, 2, 3, 4));
	console.log(colt.addNumbers.apply(elie, [5, 6, 7, 8]));
	// bind
	console.log("Using bind");
	console.log(colt.sayHi());
	var elieHi = colt.sayHi.bind(elie);
	console.log(elieHi());
	console.log(colt.addNumbers(1, 2, 3, 4));
	var elieAddNumbers = colt.addNumbers.bind(elie, 5, 6, 7);
	console.log(elieAddNumbers(1));
}());