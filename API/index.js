// console.log("hii");

//Asynchronous Programming:
//run after two secound
// setTimeout(()=> console.log('soup'),2000)

// setTimeout(()=> alert("hey welcome !"),2000 )

//run function after 2 sec
// const watingforsoup=()=> console.log('order soup')

// console.log("start convo");
// setTimeout(watingforsoup,2000);
// console.log("still speaking");

//Promises::
// const Promisei = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //soup is readyor not
//     //get random true or false
//     isready = [true, false][Math.floor(Math.random() * 2)];
//     isready ? resolve("soup is ready") : reject(" no soup");
//   }, 1000);
// });

// //then use when promise true:
// //catch use to detect false and print reject stattment
// console.log(
//   Promisei
//     // .then(value=>console.log(value))
//     .then((sucess) => console.log({ sucess }))
//     .catch((error) => console.log({ error }))
// );









