//higher order function
//map-->loops return array
//filter
// reduce



//map
// let num=[1,2,3,4];


// const doubleMap=(numbers)=>
// {
//   //map work as loop also
// let result=num.map(number =>number*2)
// //     {
// //     // console.log(number*2)
// //     // console.log("hi");
// // })
// return result;
// }


// console.log(doubleMap(num));






//filter

//manual way to making filter:
// const filter = (numbers,graterThan)=>{

//     let result=[];
//     for(const num of numbers){
//         if(num > graterThan)
//         {
//             result.push(num)
//         }
//     }
//     return result;
// }
// let num=[1,2,3,4,5,6]
// console.log(filter(num,4));



//filter method  -> loop and return matching condition

// const num=[1,2,3,4,5,6];

// console.log(num.filter(num=>num>4 || num<2 )); 


// const actors=[
//     {name:"johny" , networth:200000},
//     {name:"sun" , networth:40000},   
//     {name:"none" , networth:90000},    
// ]

// // console.log(num.filter(num => num >4 || num<2));
// console.slog(actors.filter(actor => actor.networth > 10000));






//reduce

//old way
// function sum(a,b)
// {
//     return a+b;
// }





//method

const nums=[1,2,3,4]
const result = nums.reduce((a,b)=> a+b,10)


console.log(result);

