var reveal = document.querySelector("#btn");
var result = document.getElementById("result");

reveal.addEventListener("click", function(){
    console.log("Sup bro");
    console.log(result);
    result.style.display = "block";
    reveal.style.display = "none";
});

var title = document.getElementById("title1");
var type = document.getElementById("type");
var sprite = document.getElementById("img");
//var finalCharacter = localStorage.getItem("result")



const getPokemon = () => {
    var finalCharacter = 21
    var pokeUrl = `https://pokeapi.co/api/v2/pokemon/${finalCharacter}`;
    fetch(pokeUrl)
        .then( res => {
            return res.json();
        })
        .then(data => {console.log(data);
        title.textContent = data.name;
        type.textContent = "#" + data.id;
        document.getElementById("img").src = data.sprites['front_default'];
        var namesArr = ["litwick", "squirtle"];
        namesArr.push(data.name);
        localStorage.setItem('character', JSON.stringify(namesArr));
        console.log(namesArr);
        document.getElementById("info").href = `https://bulbapedia.bulbagarden.net/wiki/${data.name}_(Pok%C3%A9mon)`;
        //localStorage.setItem('character', data.name);
    })    
};

getPokemon();

var previous = JSON.parse(localStorage.getItem("character"));
console.log(previous);
const populate = previous.map(n => `<li>` +  n + `</li>`);
console.log(populate);
const html = `<ul>` + populate.join(``) +  `</ul>`;
console.log(html);
document.getElementById("highScores").innerHTML = html;


   
    // Append child? 
    // Push each result to the array in local storage

//var first = document.getElementById("1")
//first.textContent = "1. " + previous;

const getDisney = () => {
    var finalCharacter = 21
    var disneyUrl = `https://api.disneyapi.dev/characters/${finalCharacter}`;
    fetch(disneyUrl)
        .then( res => {
            return res.json();
        })
        .then(data => {console.log(data);
        title.textContent = data.name;
        console.log(data.name);
        type.textContent = data.films;
        document.getElementById("img").src = data.imageUrl;
        document.getElementById("info").href = `https://disney.fandom.com/wiki/${data.name}`;
        //var namesArr = ["litwick", "squirtle"];
        //namesArr.push(data.name);
        //localStorage.setItem('character', JSON.stringify(namesArr));
        //console.log(namesArr);
        //localStorage.setItem('character', data.name);
    })    
};

//getDisney();