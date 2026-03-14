////Factorial of any number

let a=prompt("Enter a number")

// function factorial(num){
//     let array=Array.from(Array(num+1).keys())
//     let c=array.reduce((a,b) => a*b)
//     return c
// }

function factFor(num){
    let fac=1;
    for(let i=1;i<=num;i++){
        fac=fac*i
    }
    return fac
}
console.log(factFor(a))