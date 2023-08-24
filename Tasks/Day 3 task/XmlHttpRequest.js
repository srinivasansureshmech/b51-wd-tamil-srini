//To print all countries flags

let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    
    let users = JSON.parse(xhr.responseText);

    let userNames = [];

    for (let user of users) {
        userNames.push(user['flag']);
    }

    console.log(userNames);
};

xhr.send();