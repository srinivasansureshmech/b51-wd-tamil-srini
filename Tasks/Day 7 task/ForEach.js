//To print all countries flags

let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    
    let countryData=JSON.parse(xhr.responseText);
    countryData.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    });
};

xhr.send();