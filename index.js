// make buttons
let getBored = document.createElement("button");
getBored.innerText = "Bored";

let pokemon = document.createElement("button");
pokemon.innerText = "Pokemon";
// show buttons
document.body.append(getBored,pokemon);

// waiting for clicks
getBored.addEventListener("click",getBoredApi);
pokemon.addEventListener("click",getPokeApi);

//function API 1
async function getBoredApi() {
    let items = await fetch("http://www.boredapi.com/api/activity?type=social") 
    .then((data) => data.json())
        .then((items) =>  console.log(items))  
    if (participants = 1) { console.log("Bare 1"); }
    else { console.log("Flere"); }
    
}



//function API 2
async function getPokeApi() {
    let pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/100")
    .then((data) => data.json())
    .then((items) => console.log(items)); 
    

}

class Pokemon {
    constructor(name, height, id, weight) {
        this.name = name;
        this.height = height;
        this.id = id;
        this.weight = weight;
    }

}

let pokemonArray = [];

async function getPokeApis(url) {
    let pokemon2 = await fetch(url);
    let jsonDAta = await pokemon2.json();
    jsonDAta.forEach(element => {
        pokemonArray.push(element)
        pokemonClass = new Pokemon(element.name, element.height, element.id, element.weight);
    });
}

getPokeApis("https://pokeapi.co/api/v2/pokemon/100")
    .then(() => { alert(`Min sjefs favorittpokemon er${name}. Den er ${height}, veier ${weight} og har id ${id}`); })


