// const ramdomfruit=(fruits)=>{
//  const randomno= Math.floor (Math.random()*fruits.length)
//  console.log(randomno);
//  return fruits[randomno]
// }

// let fruits=['apple','orange','mango','grapes'];
// // console.log(fruits[0]);
// console.log(ramdomfruit(fruits));

// const weatherscore=(weather)=>{

//     const randomwe=Math.floor(Math.random()*weather.length)
//     let score=0;

//     if(weather[randomwe]=='rainy')
//     {
//         score=1;
//         console.log("Its rainning");
//     }
//     else if(weather[randomwe]=='sunny')
//     {
//         score=-1;
//         console.log("Its sunnying");
//     }
//     else
//     {
//         score=0;
//         console.log("Its winterrrr");
//     }

//     console.log(score);
//     return weather[randomwe];
// 1
// }

// let weather=['rainy','sunny','weather'];

// console.log(weatherscore(weather));

//real code RPS:rock paper scissors

//get a randomally select between 'rock' , 'paper' , 'scissors and return the string


const totalscore={computerscore:0 ,playerscore:0}



function getcomputerchoice() {
  const rpschoice = ["rock", "paper", "scissors"];
  const randomchoice = Math.floor(Math.random() * 3);
  return rpschoice[randomchoice];
}

console.log(getcomputerchoice());


//function for condition when human win or loss
function getresult(playerchoice, computerchoice) {
  let score = 0;
  if (playerchoice == computerchoice) {
    return score=0;
  } else if (playerchoice == "rock" && computerchoice == "scissors") {
    score = 1;
  } else if (playerchoice == "paper" && computerchoice == "rock") {
    score = 1;
  } else if (playerchoice == "scissors" && computerchoice == "paper") {
    score = 1;
  } else {
    score = -1;
  }

  return score;
}

// console.log( getresult('paper','rock'));





function showresult(score,playerchoice,computerchoice)
{
    const resultdiv=document.getElementById('result');
    const handsdiv=document.getElementById('hands');
    const playerscorediv=document.getElementById('player-score');
    if(score==-1)
    {
       resultdiv.innerText='You Loss!🙃'
    }
    else if(score==0)
    {
        resultdiv.innerText='You tie!🤜🤛'
    }
    else{
        resultdiv.innerText='You Won!😎'
    }

    handsdiv.innerText=`🧑${playerchoice} vs 🤖${computerchoice}`

playerscorediv.innerText=`Your Score:  ${totalscore['playerscore']}`;
}



function onclickrps(playerchoice)
{
    console.log(playerchoice);
    const computerchoice=getcomputerchoice();
    console.log(computerchoice);
    const score=getresult(playerchoice,computerchoice);
    totalscore['playerscore']+=score
    console.log(score);
    console.log(totalscore);

    showresult(score,playerchoice,computerchoice)
}



function playgame()
{
    const rpsbuttons=document.querySelectorAll('.rpsbutton');
    
    rpsbuttons[0].onclick=()=>console.log(rpsbuttons[0].value);
    // console.log(rpsbuttons);

    rpsbuttons.forEach(rpsbutton => {
        rpsbutton.onclick=()=>onclickrps(rpsbutton.value)
    });
    

    const endbutton=document.getElementById('clear-game');
    
    endbutton.onclick=()=>endgame(totalscore);
}



function endgame(totalscore){
   totalscore['playerscore']=0;
   totalscore['computerscore']=0;

   const resultdiv=document.getElementById('result');
    const handsdiv=document.getElementById('hands');
    const playerscorediv=document.getElementById('player-score');

    resultdiv.innerText=''
    handsdiv.innerText=''
    playerscorediv.innerText=''
}


playgame();






