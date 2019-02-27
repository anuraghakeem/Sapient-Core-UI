(function () {
    // body of the function
    'use strict';
    alert("Check Console");

    var movies = [{ title: "In Bruges", rating: 5, hasWatched: true },
    { title: "Sholay", rating: 3.5, hasWatched: false }
    ];

    movies.forEach(function (movie) {
        if (movie.hasWatched) {
            var sen = "You have watched " + movie.title + " - " + movie.rating + " stars";
            console.log(sen);
        }else{
            var sen = "You have not watched " + movie.title + " - " + movie.rating + " stars";
            console.log(sen);
        }
    });



}());


