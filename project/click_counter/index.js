// console.log("Sejal");


// //dom

// let tittle = document.getElementById('tittle');
// console.log(tittle.innerText);

// tittle.innerText='Good M'

// console.log('after : ',
// tittle.innerText);


// tittle.innerHTML='<h3>fdvfbvn</h3>'


// tittle.style.color='red'
// tittle.style.backgroundColor='yellow'





//red, yellow ,blue click

let reddiv=document.getElementById('red');
let yellowdiv=document.getElementById('yellow');
let bluediv=document.getElementById('blue');


reddiv.onclick=()=>{
    console.log('red')

};



reddiv.onclick=()=>console.log('clicked red');
yellowdiv.onclick=()=>console.log('clicked yellow');
bluediv.onclick=()=>console.log('clicked blue');


const square =document.querySelectorAll('.colorsq')
// console.log(square);


// console.log(square[0].value);
// console.log(square[1].value);
// console.log(square[2].value);



//for each::

const timeclick={'red':0,'yellow':0,'blue':0}
//loop
square.forEach(square=>{
    //eventlistner
    square.onclick=()=>{
        // console.log(square.value)

        //increment
        timeclick[square.value]+=1;
        square.innerHTML=`<h1>${timeclick[square.value]}</h1>`;
    }
    
})





function clearescore()
{
    timeclick.red=0;
    timeclick.yellow=0;
    timeclick.blue=0;
    square.forEach(square=>square.innerHTML='')
}


//it means when we click on this button it will ru above function
const clearGame=document.getElementById('clear-game');
clearGame.onclick=()=>clearescore();



