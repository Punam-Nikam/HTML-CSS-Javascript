// //string
let str = "Hello";

 console.log(str[0]);
 console.log(str[1]);
 console.log(str[2]);
 console.log(str[3]);
 console.log(str[4]);

// let obj = {
//     item:"Pencil",
//     price:5,
// };
// //this is simple format which print using '' or ""
// //console.log("Price of ",obj.item ,"is",obj.price,"Rs/-");

// //by using `` template literal ,better way 
// let op= `the price of ${obj.item} is ${obj.price} Rs/-`;
// console.log(op);

// ////template literals

// let specialString = `This is template literal`;
// console.log(specialString);


// let str = " Hello Friends  ";
// str.toUpperCase();

// str.toLowerCase();

// str.trim();

// let str="0123456789";
// console.log(str.slice(2,6));  //op-> 2345

// let str="Hello";
// console.log(str.slice(2,5));  //op->llo

// let str="Hello";
// console.log(str.slice(4)); //-> o

// let str="Hello";
// console.log(str.slice(1)); //-> ello

////concatenation

// let s1="Hello   ";
// let s2="World";
// let res=s1.concat(s2);
// console.log(res);

// let s1="Hello";
// let s2="   World";
// let res=s2.concat(s1);
// console.log(res);

////replace

// let str="Fellow";
// console.log(str.replace("F","y")); //->yellow

// console.log(str.charAt(5)); //prints which char at that pos,ex 5=w

////Q. accept full name add @at first then fullname and last lenght of full name

// let userName=prompt("Enter your full name");
// let Name="@"+userName+userName.length;
// console.log(Name);

let name="Punam"
let friend="Aku"
console.log("My name is "+name,"And my best friend is "+friend)