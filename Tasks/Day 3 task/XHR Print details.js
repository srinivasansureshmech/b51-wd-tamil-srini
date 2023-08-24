
let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    
    let users = JSON.parse(xhr.responseText);

    let userNames = [];

    for (let user of users) {
        userNames.push(user['name']);
    }
    let Reg = [];
    for (let user of users) {
        Reg.push(user['region']);
    }
    let subReg = [];
    for (let user of users) {
        subReg.push(user['subregion']);
    }
    let Popul = [];
    for (let user of users) {
        Popul.push(user['population']);
    }

    console.log("Names: ",userNames,"Region: ", Reg,"Sub-Region:  ", subReg,"Population: ",Popul);
};

xhr.send();