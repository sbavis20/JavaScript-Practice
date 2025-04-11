//switch cases


let statusVal = 1;

switch(statusVal){
    case 1:{
        console.log("Super User");
        break;
    }
    case 2:{
        console.log("Medium User");
        break;
    }
    case 3:{
        console.log("Normal User");
        break;
        }
    default:{
        console.log("Lowest User");
        }

}

//fallout in switch cases  -- without break stmt

//ternary Operator
//syntax condition ? correctvalue : falsevalue

//let voteStatus = null;

let age = 16;

// if(age>=18){
//     voteStatus = 1;
// }
// else{
//     voteStatus = 2;
// }

let voteStatus = age>=18 ? 1 : 2;

console.log(voteStatus);


//Loops
//while, do while, for

let a = 1;
while(a<10){
    //console.log("Sawamura "+a);
    a++;
}

let a1= 1;
do{
    //console.log("Naruto "+a1);
    a1++;
}while(a1<10);


let a2 =1;
for(a2;a2<10;a2++){
   // console.log("Ace "+a2);
}

let a22 =1;
for(a22;a22<10;a22++){
    if(a22==5){
        continue; // end the current ands move to next interation
    }
    console.log("Ace "+a22);
}



//Array

//collection of elements or data of same type in a single variable

let cities = ["Mumbai","Pune","Banglore","Hyderabad"];

console.log(cities);

cities[2] = "Delhi";

console.log(cities);

let numbers = [2,55,20,100,200,101];

for(a=0;a<numbers.length;a++){  //dont go <= it will go one more time
    console.log(numbers[a]);
}

//Objects

//collection of properties/data which represents a single entity/object
/*
//student 1
let name = "Sawamura";
let age1= "27";
let city = "Tokyo";

//student2
let name2 = "Furuya";
let age2= "27";
let city2 = "Tokyo";

problems : naming convention, data is scattered, --> Solution --> Object
*/


let student1 = {
    name : "Sawamura",
    age : "27",
    city : "Tokyo"
};

//data is enclosed in single object

let student2 = {
    name : "Furiya",
    age : "27",
    city : "Tokyo"
};

student2.city="Hokaido";

console.log(student1);
console.log(student1.name);

console.log(student2.city);



