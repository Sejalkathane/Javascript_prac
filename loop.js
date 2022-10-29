// groceries=['apple','bannana','grapes','peer'];

// for(let x=0;x<groceries.length;x++)
// {
// console.log(x,groceries[x]);
// }

//new way to write loop
// for(const x of groceries){
//     console.log(x);

// }

// const numbers=[1,2,3,4,5,6];

// for(const i of numbers)
//    console.log(i);

// let result=[];
// for(const i of numbers)
//    result.push(i*2);

// console.log(result);

// console.log(double([1,2,3,4,4]));

// const howmanylet=()=>{
//     const phrase='hey, can you go to grocery store with me?'

//     //simply calculate length

//     return number
//     let result=0;
//     for(letter in phrase){
//         // console.log(letter);
//         result = Number(letter)+1;
//     }

//     return {result};

//     //return character
//     // for(const letter of phrase){
//     //     console.log(letter);
//     // }
// }

// console.log(howmanylet());

// phrase=prompt("Please enter phrase:: ");
// console.log('phrase length is: '+phrase.length);

// const sumarray=(number)=>{
//     let result=0;

//     for(const num of number){
//         // console.log(number);
//         result=result+num;

//     }
//     return {result};
// }

// nums=[1,23,263,21,12,2];
// // console.log(sumarray(nums));

// const findmax= (number)=>{
//     let result=number[0];

//     for(no of number)
//     {
//         if(no>result){
//             result=no;
//         }
//     }
//     return result;
// }

// console.log(findmax(nums));





// const leetfreq= (phrase) => {
//     // 'haha'
//     console.log(phrase);

//     let freq={}
//     for(const letter of phrase)
//     {
//         // console.log(letter);

//         if(letter in freq)
//         {
//             // freq[letter]=freq[letter]+1;
//             freq[letter]++;

//         }
//         else{
//             freq[letter]=1
//         }
//     }
//    return freq;

// }

// console.log(leetfreq('hey, hi my name is sejal kathane'));




// const wordfreq = (phrase) => {
// //   let freq = {};

//   const word = phrase.split(' ');

//   for (const wo of word) {
//     console.log(wo);

//     if (wo in freq) {
//       freq[wo]++;
//     } else {
//       freq[wo] = 1;
//     }
//   }

//   // console.timeLog(word)
//   return freq;


// return leetfreq(word);
// };

// const userinput =prompt ("Write you sen :: ")
// console.log(wordfreq(userinput));











//excersice::
// convert hr to sec


let hr=12;

console.log(hr*60*60);
