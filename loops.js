// for(let i=1;i<=5;i++)
//     console.log("hello world");


// let i=1;
// while(i<=5)
// {
//     console.log("Hello");
//     i++;
// }



// let i=1;
// do{
// console.log("i = ",i);
// i++;
// }while(i<=10);


////for -of loop

// let str="beautiful world";
// let size=0;
// for(let i of str)
// {
//     console.log("i = ",i); //prints each lettor of string
//     size++;
// }
// console.log("string size = ",size)

//// for-in loop

// let student ={
//     name:"punam nikam",
//     age:20,
//     cgpa:8.91,
//     isPass:true
// };
// for(let key in student) {
//     console.log(key," = ",student[key]);
// }


////Q.1 print odd nos 1 to 100


// for(let num=1;num<=100;num++){
//     if(num%2 !==0){
//         console.log(num);
// }  }

////Q.2 input rand num from user

// let gameno=90;
// let num=prompt("Guess game number");
//  if(num==gameno)
//  {
//     console.log("You guess correct game number");
//     console.log("Well Done!!");
//  }
//  else{
//     console.log("You guess incorrect number");
//     console.log("Try again");
//  }


// let gameno=54;
// let num=prompt("Guess game number");
// while(num!=gameno)
// {
//     num=prompt("You entered incorrect number,please try again");
// }
// console.log("Your number is correct..Well done!!");

let obj = {
    name:"Punam",
    role:"Programme",
    company:"Microsoft"
}

for (const key in obj) {
  
        console.log(key)
    }

    for (const c of "Punam") {
        console.log(c)
    }