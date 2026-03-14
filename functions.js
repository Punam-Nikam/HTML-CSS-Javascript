// function myfunction()  //function definition without parameter
//{
//     console.log("Welcome !! \nWe are learning javascript");
// }
// myfunction(); //function call
// myfunction();
// myfunction();
// myfunction();

// function myfunction(msg)    //function definition with parameter
//  {
//     console.log(msg); //msg-> input
// }//function call
// myfunction("Hello students!!\nWe are learning javascript");   //argument
// myfunction("What is your domain?\nWhat is your qualification");
// myfunction("Why do you want this job");

////sum of two nos

// function sum(x,y)
// {
//     s=x+y;
//     return s;

// }
// let val=sum(3,4);
// console.log(val);

///sum multi funs
///array function ->

// function add(x,y)
// {
//     return x+y;
// }

// const arrowsum=(x,y) =>{
//     console.log(x+y);
// };

// function mult(a,b)
// {
//     return a*b;
// }
// const arwmul=(a,b)=>{
//     console.log(a*b);
// };

// //
// const printxt=()=>{
//     console.log("Hello students");
// }

///pQ

// function vowels(string){
//     let count=0;
//     for(const char of string)
//         {
//     if (    char=="a" || 
//             char=="e" ||
//             char=="i" || 
//             char=="o" ||
//             char=="u"  )
//         {
//             count++;
//         }
//     }
//     //console.log(count);
//     return count;
//     }
    //pq.aaroe funfor same

    // const arrowfun=(string) =>{
    //     let count=0;
    // for(const char of string)
    //     {
    // if (    char=="a" || 
    //         char=="e" ||
    //         char=="i" || 
    //         char=="o" ||
    //         char=="u"  )
    //     {
    //         count++;
    //     }
    // }
    // //console.log(count);
    // return count;
    // }
///forEach function-> callback fun^n
// let arr=[1,2,3,4,5];

// arr.forEach(function printVal(val) {
//     console.log(val)
// });

////PQ  print square of each value of array using forEach
///method 1:

// let array=[1,2,3,5,6,8,4,9];
// console.log(array);
// array.forEach(function sqr(val) {
//     console.log(val**2);
// })
 
///method 2 using arrowfunction

// let numbers=[1,2,3,4,5,6,7];
// numbers.forEach((num) => {
//     console.log(num *num);
// });


////Methods of arrray 1.MAP


// let nums=[67,52,39];
// let newa = nums.map((val)=>{
//     console.log(val);
// });
// console.log(newa);
// let calcSquare=(num)=> {
//     console.log(num*num);
// };

//// 2.Filter

// let arr=[1,2,3,4,5,6,7,8,9];
// let evenarr=arr.filter((val) =>
// {
//     return val % 2 == 0;
// });
// console.log(evenarr);

/// 3. Reduce

// let arr=[5,5,6,2,6,7,8,9,2,4,2,3,4,5];
// const op=arr.reduce((res,curr) => {
//     return res+curr;
// });
// console.log(op);


///PQ.filter out student marks >90+

// let marks=[99,100,84,71,90,89,92];
// let toppers=marks.filter((val)=>{
//     return val>90;
// });
// console.log(toppers);

//Pq.2,input any number and print array till that number
///ex - > input is 5 =>op : [1,2,3,4,5]

let n=prompt("Enter a number : ");
let arr=[];
for(let i=1;i<=n;i++)
{
    arr[i-1]=i;
}///sum of all nos.
console.log(arr);
let sum=arr.reduce((res,curr)=>{
    return res+curr;
});
console.log(sum);
///factorial of all numbers => multiplication of all nos
let fact=arr.reduce((res,curr)=>{
    return res*curr;
});
console.log(fact);