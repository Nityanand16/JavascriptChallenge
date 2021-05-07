//Program to swap two numbers without using third variable in Javascript ES6

var a = 10;
var b = 2;

console.log("first method");

a = a+b;    //10+2 = 12
b = a-b;    //12-2 = 10
a = a-b;    //12-10 = 2

console.log("<br>");
console.log("Value of a    "+a);
console.log("<br>");
console.log("Value of b    "+b);

console.log("<br>");
console.log("second method");

var a = 10;
var b = 20;
[a,b] = [b,a]   //destructuring expressions ES6 notations

console.log("<br>");
console.log("Value of a    "+a);
console.log("<br>");
console.log("Value of b    "+b);

console.log("<br>");
console.log("third method");

var a = 5;
var b = 9;
a=(a*b)/(b=a)

console.log("<br>");
console.log("Value of a    "+a);
console.log("<br>");
console.log("Value of b    "+b);

