//To print all countries flags

let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    

    let countryData=JSON.parse(xhr.responseText);
        const popu=countryData.filter((element)=>{
            return element.population<200000;
        })
        console.log(popu);
};

xhr.send();