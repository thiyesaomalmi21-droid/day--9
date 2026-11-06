// console.log("Hi");

// {
//     var name="Omalmi";
//     let age =21;
// }

// console.log(name);

// let customerArray=["jasmine","patrick"];
// console.log(customerArray);

// customerArray="thiyesaa";
// console.log(customerArray);

// const numbersArray =[10,20,30,90,50,60,990];

// console.log(numbersArray);

// numbersArray.push(80);
// console.log(numbersArray);

// numbersArray.pop();
// console.log(numbersArray);

// console.log(numbersArray.toReversed());

// console.log(numbersArray.toSorted());

// numbersArray.unshift(990);

// console.log(numbersArray);

// numbersArray.shift();

// console.log(numbersArray);
// console.log(numbersArray.indexOf(90));

// 

//===========Methods ===



// function getSum( num1, num2){
//     return num1 + num2;
// }

//  let getSum = function(num1,num2){
//      return num1+num2;
//  }

//arrow functions or lambda expressions
// let getSum = (num1,num2) => {
//     return num1+num2;
// }

// let getSum = num1 => {
//     return num1;
// }

// let getSum =num1 => num1;

// console.log(getSum(20));

//const nameList = ["Saman","Wimal","Kamal","Sunimal"];

// let loopArr=(Cname) => { 
//     console.log(Cname);
// }

// nameList.forEach(loopArr); //call back function --> alling a funtcion inside another function

//nameList.forEach(Cname => console.log(Cname));

const empSalary=[75000,30000,25000,90000,150000];
const newEmpSlary=[];

empSalary.forEach(WSalary => newEmpSlary.push(parseInt(WSalary)*2));

newEmpSlary.forEach(WorkerS => console.log(WorkerS));











