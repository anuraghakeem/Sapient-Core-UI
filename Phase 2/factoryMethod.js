// https://www.dofactory.com/javascript/factory-method-design-pattern

// Go to console --> run()
function Factory() {

    this.createVehicle = function (type) {
        var car;

        if (type === "car") {
            car = new Car();
        } else if (type === "bike") {
            car = new Bike();
        } else if (type === "bus") {
            car = new Bus();
        } else if (type === "truck") {
            car = new Truck();
        }

        car.type = type;

        car.say = function () {
            log.add(this.type + ": Number of doors is: " + this.noOfDoors);
        }

        return car;
    }

    // this.createEmployee = function (type) {
    //     var employee;

    //     if (type === "fulltime") {
    //         employee = new FullTime();
    //     } else if (type === "parttime") {
    //         employee = new PartTime();
    //     } else if (type === "temporary") {
    //         employee = new Temporary();
    //     } else if (type === "contractor") {
    //         employee = new Contractor();
    //     }

    //     employee.type = type;

    //     employee.say = function () {
    //         log.add(this.type + ": rate " + this.hourly + "/hour");
    //     }

    //     return employee;
    // }
}

var Car = function () {
    this.noOfDoors = "4";
    this.noOfTires = "4";
    this.engine = "yes";
    this.mirrors = "yes";
};

var Bike = function () {
    // this.noOfDoors = "0";
    this.noOfTires = "2";
    this.engine = "yes";
    this.mirrors = "bike yes";
};

var Truck = function () {
    this.noOfDoors = "6";
    this.noOfTires = "8";
    this.engine = "no";
    this.mirrors = "yes";
};

var Bus = function () {
    this.noOfDoors = "1";
    this.noOfTires = "10";
    this.engine = "bus no";
    this.mirrors = "yes, a lot";
};

// var FullTime = function () {
//     this.hourly = "$12";
// };

// var PartTime = function () {
//     this.hourly = "$11";
// };

// var Temporary = function () {
//     this.hourly = "$10";
// };

// var Contractor = function () {
//     this.hourly = "$15";
// };

// log helper
var log = (function () {
    var log = "";

    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();

function run() {
    var cars = [];
    var factory = new Factory();

    cars.push(factory.createVehicle("car"));
    cars.push(factory.createVehicle("bike"));
    cars.push(factory.createVehicle("truck"));
    cars.push(factory.createVehicle("bus"));

    for (var i = 0, len = cars.length; i < len; i++) {
        cars[i].say();
    }

    log.show();
}