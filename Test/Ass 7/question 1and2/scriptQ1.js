$(document).ready(function(){
    "use strict";
    const countryApi = 'https://restcountries.eu/rest/v2/all';
     $('#ddlCountry').bind('change',function(){
        
     })
    function fetchCountries(){
        $.ajax({
            url: countryApi,
            type: "GET",
        }).then(result => {
            //console.log(result);
            bindCountries(result);
        }).catch(err => {
            console.log(err);
        });
    }

    function bindCountries(data){
        data.forEach((country,i)=>{
            let option = $('<option/>').val(country.alpha2Code).text(country.name);
            $('#ddlCountry').append(option);
        });
    }
    fetchCountries();
});