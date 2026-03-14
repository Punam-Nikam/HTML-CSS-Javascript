// let marks=[99,89,59,68,37];
// console.log(marks);
// let info=["Punam",20,"savaki"];
// console.log(info);
// console.log(info.length);

//****array is mutable*****

//loops over array

// let hero=["Vijju","Akkuu","Ram","Thalapathy","Allu"];
// for(let ind=0;ind<hero.length;ind++)
// {
//     console.log(hero[ind]);
// }

//by using for of loop
// for(let heroes of hero){
//     console.log(heroes);
// }

//PQ.find sum and avg

// let marks=[99,89,59,68,37];
// let sum=0;
// for(let value of marks)
// {
//    sum +=value // sum=sum+value;
//     //console.log(value);
// }
// let avg=sum/marks.length;
// console.log(`Average marks of the class = ${avg}`)

//PQ..apply 10 per offer on array then print final array

////using for of loop

// let item = [250,645,300,900,50];
// let ind=0;
// let i=0;
// for(let val of item){
// console.log(`value at index ${ind}= ${val}`);
// let offer=val/10;
// item[i]=item[i]-offer;
// console.log(`value after offer= ${item[i]}`);
// i++;
// }

////easy method using for loop

// let item = [250,645,300,900,50];
// for(let i=0;i<item.length;i++)
// {
//     let offer=item[i]/10;
//     item[i]-=offer;
// }
// console.log(item);

////Array methods

// let fruits=["Apple","Grapes","Watermelon","guava","Mango","Strawberry"];
// fruits.push("Pomegranut","orange","litchi");
// console.log(fruits);

// fruits.pop();
// console.log(fruits);
// console.log(fruits.toString());

////CONCATE

// let heros=["kartik","Vijay","Ram","Srk"]
// let heroine=["Kriti","Rasshi","Tamanna","Kajol"]
// let add = heros.concat(heroine)
// console.log(add)

// //// UNSHIFT
// heros.unshift("AKKUU")
// console.log(heros)

// //SHIFT

// heros.shift()  //removes only first starting elememnt of array
// console.log(heros)

//Slice

// let heros=["kartik","Vijay","Ram","Srk"];
// console.log(heros);
// console.log(heros.slice(0,4));
// console.log(heros.slice(1,3));

// //SPlice
//  let heros=["kartik","Vijay","Ram","Srk","Allu","Akkii","siddharth","varun"];
//  heros.splice(1,"kartik","sushant");
//  console.log(heros);
// //add
// let arr=[1,2,3,4,5,6,7,8,9]
// arr.splice(1,3,23)
// console.log(arr)

// //del
// arr.splice(3,2)
// console.log(arr)

// //relace
// arr.splice(3,1,102)
// console.log(arr)

///PQ.
// let companies=["Boomberg","Microsoft","Uber","Google","IBM","Netflix"];
// //remove 1st company
// companies.shift();
// console.log(companies);

// //remove uber and add ola in its place
// companies.splice(1,1,"Ola");
// console.log(companies);

// //add amezon
// companies.push("Amezon");
// console.log(companies);


// let arr=[1,2,3,4,5]

// console.log(arr)
// console.log(arr[0]=333)
// console.log(arr.length)
// console.log(arr)
// console.log(arr.pop())
// console.log(arr)
// console.log(arr.push(99))
// console.log(arr)
// console.log(arr.push("Harry"))
// console.log(arr)
// arr.shift()            //Shift (pop) -= from starting
// console.log(arr)   //Shift ---> POP
// arr.unshift("Achu")                   //Unshift ---> push
// console.log(arr)             //unshift -= add at starting
// delete arr[0]
// console.log(arr)
// console.log(arr[0])
let Arr = [3,5,8,11,14,7,89,13]

let newArr =Arr.map((e)=>{
    return e**2
})

console.log(newArr)

/////

const greaterThanTen=(e)=>{
    if(e>10){
        return true
    }
        return false
}
console.log(Arr.filter(greaterThanTen))