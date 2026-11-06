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

let  numbersArray=[10,20,30,40,50,60,70,80];

body="[ ";
for(let number of numbersArray){
    body +=number +`  `
}
body +=` ]`;
console.log(body);

document.getElementById("arraydisplay").innerHTML=body;

function change(){
    let number1 = document.getElementById("field1").value;

    //console.log(number1);

    let index = numbersArray.indexOf(parseInt(number1));
    console.log(index);

    let number2 = document.getElementById("field2").value;

    numbersArray[index]=parseInt(number2);

    console.log(numbersArray);

    updateArray();
      
}
 function updateArray(){
    body="[ ";
    for(let number of numbersArray){
        body +=number +`  `
    }
    body +=` ]`;

    document.getElementById("arraydisplay1").innerHTML=body;
 }







