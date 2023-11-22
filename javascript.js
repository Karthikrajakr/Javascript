
/* three types of output*/

alert("welcome to karthik website");



document.write("my name is karthik");


console.log("karthikraja");

/* three varaibles*/

let a=50;
let b=70
let c=a-b;
console.log(c);

const name="karthikraja from erode";
console.log(name);

/* rules */

// string

let firstname="karthikraja"

// integer

let d=10;

//null

let city=null;
console.log(city);

// object- 

let laptop = {
    laptopname:"dell",
    model:2023,
    color:"blue",
    price:35000,

};

console.log(laptop);

let building={
    buildingarea:"chennai",
    squarefeet:50000,
    landmark:"busstand",
    sale:3000000,

};

console.log(building);

let bike = {
    bikename:"tvs",
    model:2023,
    color:"black",
    price:2000000,
      
};

console.log(bike);

// object notation two types dot & bracket
console.log(bike.price);

console.log(bike["model"]);

//Array

let students=["karthik","kavi","kiruba","prabhu"];
document.write(students);

let teachers =["raja","vikram","siva","dinesh"];
document.write(teachers);

//Array particular element

document.write(teachers[3]);

// Array length method

let colors=["yellow","blue","red","pink","violet"];
let value=colors.length;
document.write(value);

// array replacing method

let country=["india","france","japan","brazil"];
country[4]="england";
document.write(country);

// function

function karthik() {
    let name="raja";
    console.log(name);
}
karthik();

// function numbers additon

function add(number1,number2){
    console.log(number1+number2);
}
add(30,50);

// function numbers subtraction

function subtraction(number1,number2){

    console.log(number1-number2);

}
subtraction(200,50);

// function number multiplication

function multiplication(number1,number2,number3){
    console.log(number1*number2*number3);

}
multiplication(10,10,5);

// function concatenate method

function link(){
    let name="from chennai";
    let lastname= " my name is karthik " + name+ " my dream is to became a developer ";
    console.log(lastname);
}

link(); 

function computer(model){
    let name="dell";
    let color=" the color " + model + " of laptop is blue ";
    console.log(color);
}
computer("hp");
computer("samsung");
computer("apple");











