//To print all countries flags

let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.eu/rest/v2/all');

xhr.onload = function () {
    
    var data = JSON.parse(xhr.responseText);
    var cur=[];
    for(i=0;i<data.length;i++){
        if(data[i].currencies[0].code==="USD")
        {
            console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
        }
    }
}

xhr.send();