// Closure at 1 level
// function bookTicket(mode) {
//     var discount = mode == "flight" ? 10 : mode == "cruise" ? 20 : mode == "train" ? 30 : 0;
//     return function (source, destination) {
//         var price = Math.floor((Math.random() * 1000) + 1);
//         console.log("Source: " + source);
//         console.log("Destination: " + destination);
//         console.log("Price: " + price);
//         console.log("Discount: " + (price * (discount / 100)));
//     };
// }

// var flight = new bookTicket("flight");
// var train = new bookTicket("train");
// var cruise = new bookTicket("cruise");

// flight("India","USA");
// cruise("Mumai","Andaman");
// train("Bangalore","Chennai");

// Closure at two levels
function bookTicket(mode) {
    var discount = mode == "flight" ? 10 : mode == "cruise" ? 20 : mode == "train" ? 30 : 0;
    var price = Math.floor((Math.random() * 1000) + 1);
    return {
        printTicket: function (source, destination) {
            return function () {
                console.log("I am 2nd level closure");
                console.log("Source: " + source);
                console.log("Destination: " + destination);
                console.log("Price: " + price);
            }
        },
        printDiscount: function (source, destination) {
            console.log("Discount: " + (price * (discount / 100)));
        }
    }
}
var flight = new bookTicket("flight");
var train = new bookTicket("train");
var cruise = new bookTicket("cruise");


flight.printTicket("India", "USA")();
flight.printDiscount("India", "USA");
// cruise("Mumai","Andaman");
// train("Bangalore","Chennai");