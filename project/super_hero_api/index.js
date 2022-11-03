//https://superheroapi.com/api/access-token/character-id
//496329159190637

const SUPERHERO_TOKEN = 496329159190637;

const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const newherobutton = document.getElementById("newherobutton");

const heroimagediv = document.getElementById("heroimage");

const searchbutton = document.getElementById("searchbutton");

const searchinput = document.getElementById("searchinput");




const getsuperhero = (id, name) => {
  fetch(`${BASE_URL}/${id}`)
    .then((responce) => responce.json())
    .then((json) => {
    //   console.log(json);
    const name=`<h2> ${json.name} </h2>`
    const intelligence=`<p>${json.powerstats.intelligence}</p>`
    const strength=`<p>${json.powerstats.strength}</p>`
    heroimagediv.innerHTML = `${name} <img src ="${json.image.url}" height=500 width=400/> <br> 🧠Intelligence:${intelligence}  <br> 💪Strength: ${strength}`;

    });
};





// const getstats=(character)=>{
//     console.log(Object.Keys(character.powerstats).map(stst=>{
//         return `<p>${stat}:${character.powerstats[stat]}</p>`
//     }));
// //    for(stat in character.powerstats)  {
// //     console.log(stat);
// //    }
// }



const getsearchsuperhero = (name) => {
  console.log(searchinput.value);
  fetch(`${BASE_URL}/search/${name}`)
    .then((responce) => responce.json())
    .then((json) => {
    //   console.log(json);
      const hero = json.results[0];
    //   console.log(hero);
      heroimagediv.innerHTML = `<img src ="${hero.image.url}" height=500 width=400/>`;
    });
};    




const randomhero = () => {
  const numberofhero = 731;
  return Math.floor(Math.random() * numberofhero) + 1;
};

newherobutton.onclick = () => getsuperhero(randomhero());

searchbutton.onclick = () => getsearchsuperhero(searchinput.value);

// const img='https://www.superherodb.com/pictures2/portraits/10/100/10476.jpg'

// document.querySelector('body').innerHTML+=`<img src ="${img}" height=500 width=400/>`;
