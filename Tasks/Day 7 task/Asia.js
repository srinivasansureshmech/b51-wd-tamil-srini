//To print all countries flags

let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    
    // let users = JSON.parse(xhr.responseText);

    var countryData=JSON.parse(xhr.responseText);
    const asia=countryData.filter((element)=>{
        if(element.region==='Asia'){
            return element.name;
        }
    })
    console.log(asia);
};

xhr.send();