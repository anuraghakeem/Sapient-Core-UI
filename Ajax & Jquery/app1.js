// Way to create self-invoking function

$(document).ready(function () {
    'use strict';
    const countryApi = "https://restcountries.eu/rest/v2/all";
    $("#ddlCountry").bind("change", function () {
        alert(this.value);
    });
    function fetchCountries() {
        $.ajax({
            url: countryApi,
            type: "GET",
            // async: false,
        }).then(result => {
            // console.log(result);
            bindCountries(result);
        }).catch(er => {
            console.log(err);
        });
    }
    function bindCountries(data) {
        data.forEach((x, i) => {
            console.log(x.name);
            console.log(x.region);
            let option = $("<option/>").val(x.alpha2Code).text(x.name);
            $("#ddlCountry").append(option);

        });
    }
    fetchCountries();

});