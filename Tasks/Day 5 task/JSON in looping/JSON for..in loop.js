let num={Name:'Srinivasan', Degree: 'UG',Course:'Mech',Specialization:'Designing'};
let num1=JSON.stringify(num);
for(let numb in num1){
    console.log(num1[numb]);
}