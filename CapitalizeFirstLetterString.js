//program to count total number of characters in a string
//program to capitalize the first character of a string

console.log("********basics********")
var a = "Nityanand"
console.log(a); //Nityanand

var b = 10
b++;
console.log(b); //11

var a = "Nityanand"
console.log(a.length);  //9

function boy(name) {
    console.log("Hi    " + name)    //Hi Nityanand
}
boy("Nityanand");

var d;
console.log(d);
console.log("********basics********")

//program to count total number of characters in a string
function person(name) {
    var length=0;
    while (name[length]!==undefined)
        length++;
        return length;
}
console.log(person("Nityanand"));   //9

console.log("********************************")

//program to capitalize the first character of a string
function capital(str) {
    
}
