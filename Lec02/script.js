//Operators

//Binary Ops 2 Operands

//Arithmetic + - * /
let num1 =100;
let num2 =20;

console.log("Addition: ",num1+num2);
console.log("Substration: ",num1-num2);
console.log("Multiplication: ",num1*num2);
console.log("Division: ",num1/num2);


//Relational Ops > < >= <= == !=  (true,flase)

console.log("100 > 20",num1>num2);
console.log("100 < 20",num1<num2);
console.log("100 >= 20",num1>=num2);
console.log("100 <= 20",num1<=num2);
console.log("100 == 20",num1==num2);
console.log("100 != 20",num1!=num2);


//JS type coercion Type coercion in JavaScript refers to the automatic or implicit conversion of values from one data type to another
let num11= "11";

console.log("20 > 11 stirng hai",num2 > num11);

//console.log(num1+num11)   ye work nhi karega coz + concatination ke liye use hota hai

//identity operators
//=== !==
console.log(num1===num11);


//logical operations  && || !
console.log(2==2 && 3<1);  //atleast one false everything false

console.log(2==2 || 3<1); //Anything is true everything true

console.log(!num1==num2);


//++ increment    -- decrement
num1++;
num2--;

console.log(num1);
console.log(num2);

//postincremnt
let a = num1++;
console.log(a,num1); //101 102  first assingment will happen then incremnt

//preincrement
let a1 = ++num1; //first increment then assinmengt


//Conditonal Statements

//if
let connection =3;

if(connection === 5){

    console.log("Fetch data");

}
else{
    console.log("Cant fetch data")
}

let percentage =90;

if(percentage>=70){
    console.log("S Grade");
}
else if(percentage>=60){
    console.log("A Grade");
}
else if(percentage>=50){
    console.log("B Grade");
}
else if(percentage>=40){
    console.log("C Grade");
}
else{
    console.log("Retry");
}


//Type Conversion
let n = "20";

console.log(2 + Number(n));

let str = 24;

console.log(str.toString());
