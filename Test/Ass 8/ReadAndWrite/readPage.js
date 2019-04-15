$(document).ready(() => {
    $('#button').bind('click', function () {
       
        
        const searchAPI = '/getData';
        $.ajax({
            url: searchAPI,
            type: "GET",
            async: true,//default value
        }).then(result => {
           $('#textFile').append(result);
        }).catch(err => {
            console.log(err);
        });
    });
});

