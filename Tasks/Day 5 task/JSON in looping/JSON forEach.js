let num=[{Name:'Srinivasan', Degree: 'UG',Course:'Mech',Specialization:'Designing'}];


function printValue(value, index, array) {
    console.log(JSON.stringify(value, index, array, array[index]));
}

num.forEach(printValue);